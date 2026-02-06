import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  registrationSchema,
  type RegistrationFormData,
} from "@/lib/schemas/registration";
import {
  getRegistrationToken,
  registerUser,
  getAuthToken,
  setAuthHandoffCookie,
  ApiError,
} from "@/lib/api";
import LegalModal from "./LegalModals";

const labelClasses = "text-xs font-black uppercase text-slate-400 tracking-widest";
const inputClasses = "rounded-xl border-slate-200 h-12 focus:ring-[#C3DC65] focus:border-[#C3DC65]";

function parseApiErrors(body: unknown): string {
  if (typeof body === "object" && body !== null) {
    const messages: string[] = [];
    for (const [, value] of Object.entries(body)) {
      if (Array.isArray(value)) {
        messages.push(...value.map(String));
      } else if (typeof value === "string") {
        messages.push(value);
      }
    }
    if (messages.length > 0) return messages.join(". ");
  }
  return "Error inesperado. Inténtalo de nuevo.";
}

export default function Access() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { toast } = useToast();

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      surnames: "",
      document_type: "DNI",
      document_number: "",
      specialty: "",
      center: "",
      province: "",
      license_number: "",
      email: "",
      password: "",
      consent_privacy: false,
      consent_aedv: false,
    },
  });

  async function onSubmit(data: RegistrationFormData) {
    try {
      const token = await getRegistrationToken();

      await registerUser({
        token,
        email: data.email,
        password: data.password,
        name: data.name,
        surnames: data.surnames,
        additional_info: {
          document_type: data.document_type,
          document_number: data.document_number,
          specialty: data.specialty,
          center: data.center,
          province: data.province,
          license_number: data.license_number,
        },
      });

      try {
        const auth = await getAuthToken(data.email, data.password);
        setAuthHandoffCookie(auth.access, auth.refresh);
        window.location.href = "https://app.daexpertcase.com/dashboard";
      } catch {
        toast({
          title: "Registro completado",
          description:
            "Tu cuenta ha sido creada. Accede desde la plataforma para iniciar sesión.",
        });
      }
    } catch (error) {
      if (error instanceof ApiError) {
        toast({
          variant: "destructive",
          title: "Error en el registro",
          description: parseApiErrors(error.body),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error de conexión",
          description:
            "No se pudo conectar con el servidor. Comprueba tu conexión e inténtalo de nuevo.",
        });
      }
    }
  }

  return (
    <section id="registro" className="py-24 bg-[#FCFBFB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#294795]/5 pdf-curve -z-10 rotate-180" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/3 p-12 bg-[#294795] text-white flex flex-col justify-center space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C3DC65]/40 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-black leading-tight text-white drop-shadow-lg drop-shadow-white/20">
                Accede al curso Dermatitis Atópica Expert Cases
              </h2>
              <p className="text-lg text-slate-200 font-medium leading-relaxed">
                Formación médica avanzada basada en casos clínicos complejos, que integra simulación de pacientes y contenidos formativos orientados a la toma de decisiones clínicas en la práctica real.
              </p>
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm font-bold text-[#C3DC65]">
                  <div className="w-2 h-2 rounded-full bg-[#C3DC65] animate-pulse" />
                  Inicio: Febrero 2026
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-slate-400" />
                  Contenido exclusivo para médicos
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-12 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#294795]">Registro</h3>
              <div className="h-1 w-12 bg-[#C3DC65]" />
            </div>

            <Form {...form}>
              <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Fila 1: Nombre / Apellidos */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. Juan" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="surnames"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Apellidos</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. Pérez García" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Fila 2: Tipo de documento / Documento */}
                  <FormField
                    control={form.control}
                    name="document_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Tipo de documento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className={inputClasses}>
                              <SelectValue placeholder="Selecciona tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="DNI">DNI</SelectItem>
                            <SelectItem value="NIF">NIF</SelectItem>
                            <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="document_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Documento</FormLabel>
                        <FormControl>
                          <Input placeholder="Número de documento" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Fila 3: Especialidad / Centro de trabajo */}
                  <FormField
                    control={form.control}
                    name="specialty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Especialidad</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. Dermatología" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="center"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Centro de trabajo</FormLabel>
                        <FormControl>
                          <Input placeholder="Hospital o clínica" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Fila 4: Provincia / Nº de colegiado */}
                  <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Provincia del centro de trabajo</FormLabel>
                        <FormControl>
                          <Input placeholder="Provincia" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="license_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Nº de colegiado</FormLabel>
                        <FormControl>
                          <Input placeholder="Número de colegiado" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Fila 5: E-mail / Contraseña */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@ejemplo.com" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClasses}>Contraseña</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" className={inputClasses} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4 pt-4">
                  <FormField
                    control={form.control}
                    name="consent_privacy"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-start space-x-3 group">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1 border-slate-300 data-[state=checked]:bg-[#294795] data-[state=checked]:border-[#294795]"
                            />
                          </FormControl>
                          <span
                            onClick={() => field.onChange(!field.value)}
                            className="text-[11px] leading-relaxed text-slate-600 font-medium cursor-pointer group-hover:text-slate-900 transition-colors"
                          >
                            Declaro que he leído y acepto la{" "}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowPrivacy(true);
                              }}
                              className="text-[#294795] font-black underline hover:text-[#5FABD1]"
                            >
                              política de Privacidad
                            </button>{" "}
                            de Inspira Network S.L.U
                          </span>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent_aedv"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-start space-x-3 group">
                          <FormControl>
                            <Checkbox
                              checked={field.value ?? false}
                              onCheckedChange={field.onChange}
                              className="mt-1 border-slate-300 data-[state=checked]:bg-[#294795] data-[state=checked]:border-[#294795]"
                            />
                          </FormControl>
                          <label
                            onClick={() => field.onChange(!field.value)}
                            className="text-[11px] leading-relaxed text-slate-600 font-medium cursor-pointer group-hover:text-slate-900 transition-colors"
                          >
                            Consiento que Inspira Network S.L.U comunique a la AEDV mis datos personales (de contacto y profesionales) para recibir comunicaciones comerciales, incluso por medios electrónicos, relativas a información científica, promocional, institucional, formativa, así como de productos y servicios, de conformidad con mis preferencias. En la política de privacidad se facilita información sobre el tratamiento de mis datos personales y cómo puedo ejercer mis derechos de acceso, rectificación, supresión, retirada del consentimiento, entre otros
                          </label>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit */}
                <div className="pt-6 space-y-4">
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-[#294795] hover:bg-[#294795]/90 text-white font-black h-14 rounded-xl text-lg uppercase tracking-widest shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {form.formState.isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Registrando...
                      </span>
                    ) : (
                      "Acceder al curso"
                    )}
                  </Button>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center leading-relaxed italic">
                    "El acceso a esta formación está reservado exclusivamente a profesionales médicos."
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        type="privacy"
      />
    </section>
  );
}
