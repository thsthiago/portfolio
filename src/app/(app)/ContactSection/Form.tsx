import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "@/hooks/useFormState";
import { sendMessage } from "@/http/sendMessage";
import { AlertTriangle, CheckCircle } from "lucide-react";
import z from "zod";

const formSchema = z.object({
  name: z.string("Nome é obrigatório").min(1, "Nome é obrigatório"),
  email: z.string("E-mail é obrigatório").email("E-mail inválido"),
  message: z.string("Mensagem é obrigatória").min(1, "Mensagem é obrigatória"),
});

const action = async (data: FormData) => {
  const result = formSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { success: false, errors: errors };
  }

  const { name, email, message } = result.data;

  try {
    await sendMessage(name, email, message);
    return { success: true, message: null, errors: null };
  } catch (error: any) {
    return { success: false, message: error.message, errors: null };
  }
};

export const Form = () => {
  const [{ message, success, errors }, handleAction, isPending] =
    useFormState(action);

  return (
    <Card
      className="
        border border-slate-800/80
        bg-[#050018]/95
        shadow-[0_18px_45px_rgba(0,0,0,0.7)]
        backdrop-blur
      "
    >
      {message && (
        <Alert
          variant="destructive"
          className="mx-5 w-[calc(100%-5)] bg-[var(--bg-main)]"
        >
          <AlertTriangle className="size-4" />
          <AlertTitle>Erro ao enviar mensagem</AlertTitle>
          <AlertDescription>
            Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
          </AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert
          variant="default"
          className="mx-5 w-[calc(100%-5)] bg-[var(--bg-card)]"
        >
          <CheckCircle className="text-green-500 size-4" />
          <AlertTitle className="text-green-500">
            Mensagem enviada com sucesso
          </AlertTitle>
          <AlertDescription className="text-green-100">
            Sua mensagem foi enviada com sucesso. Vou responder o mais rápido
            possível.
          </AlertDescription>
        </Alert>
      )}

      <div className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.8),transparent_65%)] opacity-70 blur-[3px]" />

      <CardHeader className="relative pb-3">
        <CardTitle className="text-sm font-semibold text-slate-50 md:text-base">
          Me mande uma mensagem
        </CardTitle>
      </CardHeader>

      <CardContent className="relative pb-5">
        <form className="space-y-4" onSubmit={handleAction}>
          <InputField
            label="Nome"
            name="name"
            placeholder="Como posso te chamar?"
            error={errors?.name}
          />
          <InputField
            label="E-mail"
            name="email"
            placeholder="seu@email.com"
            error={errors?.email}
          />
          <InputField
            label="Mensagem"
            name="message"
            placeholder="Me conte um pouco sobre a vaga que você tem para mim"
            error={errors?.message}
            isTextArea
          />

          <div className="pt-2">
            <Button
              disabled={isPending}
              type="submit"
              className="w-full bg-violet-500 text-sm font-medium text-slate-50 hover:bg-violet-400"
            >
              {isPending && <Spinner className="size-4" />}
              {isPending ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const InputField = ({
  label,
  name,
  placeholder,
  error,
  isTextArea = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  error?: string | string[];
  isTextArea?: boolean;
}) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-xs font-medium text-slate-200">
        {label}
      </Label>
      {isTextArea ? (
        <Textarea
          id={name}
          name={name}
          rows={4}
          placeholder={placeholder}
          className="border-slate-700/80 bg-slate-900/40 text-sm text-slate-50 placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/40"
        />
      ) : (
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          className="border-slate-700/80 bg-slate-900/40 text-sm text-slate-50 placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/40"
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
