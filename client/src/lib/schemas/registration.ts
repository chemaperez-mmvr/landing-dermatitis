import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(100, "Máximo 100 caracteres"),
  surnames: z
    .string()
    .min(1, "Los apellidos son obligatorios")
    .max(200, "Máximo 200 caracteres"),
  document_type: z.enum(["DNI", "NIF", "Pasaporte"], {
    required_error: "Selecciona un tipo de documento",
  }),
  document_number: z
    .string()
    .min(1, "El número de documento es obligatorio"),
  specialty: z.string().min(1, "La especialidad es obligatoria"),
  center: z.string().min(1, "El centro de trabajo es obligatorio"),
  province: z.string().min(1, "La provincia es obligatoria"),
  license_number: z
    .string()
    .min(1, "El nº de colegiado es obligatorio")
    .regex(/^\d+$/, "Solo se permiten números"),
  email: z
    .string()
    .min(1, "El e-mail es obligatorio")
    .email("Introduce un e-mail válido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  consent_privacy: z.boolean().refine((v) => v === true, {
    message: "Debes aceptar la política de privacidad",
  }),
  consent_aedv: z.boolean().optional(),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
