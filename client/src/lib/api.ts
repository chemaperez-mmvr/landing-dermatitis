//const API_BASE = "https://ai-platform-api.metamedicsvr.com/api";
const API_BASE = "http://localhost:8000/api"
const CLASSROOM_ID = "6ecaa1a5-fed3-40d9-a9b7-10e96bd7266b";

export class ApiError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, body: unknown) {
    const message =
      typeof body === "object" && body !== null
        ? JSON.stringify(body)
        : String(body);
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const contentType = res.headers.get("content-type") ?? "";
  const body = contentType.includes("application/json")
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    throw new ApiError(res.status, body);
  }

  return body as T;
}

/** Obtiene un token de registro para el aula */
export async function getRegistrationToken(): Promise<string> {
  const data = await apiFetch<{ token: string }>(
    "/classrooms/register-token/",
    {
      method: "POST",
      body: JSON.stringify({ classroom_id: CLASSROOM_ID }),
    },
  );
  if (!data.token) {
    throw new Error("No se recibió token de registro");
  }
  return data.token;
}

/** Registra un nuevo usuario */
export async function registerUser(payload: {
  token: string;
  email: string;
  password: string;
  name: string;
  surnames: string;
  additional_info: Record<string, string>;
}): Promise<unknown> {
  return apiFetch("/users/register/", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/** Obtiene tokens de autenticación (JWT) */
export async function getAuthToken(
  email: string,
  password: string,
): Promise<{ access: string; refresh: string }> {
  return apiFetch("/token/", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/** Guarda tokens en cookie de dominio compartido (.daexpertcase.com) para handoff a app.daexpertcase.com */
export function setAuthHandoffCookie(access: string, refresh: string) {
  const value = encodeURIComponent(JSON.stringify({ access, refresh }));
  const isLocalhost = window.location.hostname === "localhost";
  const domain = isLocalhost ? "" : "; domain=.daexpertcase.com";
  const secure = isLocalhost ? "" : "; Secure";
  document.cookie = `auth_handoff=${value}; path=/; max-age=60; SameSite=Lax${domain}${secure}`;
}
