import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
	usuario: z.string().nonempty("Usuário é obrigatório"),
	senha: z.string().min(3, "A senha deve ter no mínimo 3 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const useLogin = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [alert, setAlert] = useState<{ message: string; severity: "success" | "error" } | null>(
		null
	  );

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormValues) => {
		setIsLoading(true);

		try {
			if(data.usuario === 'teste' && data.senha === '1234'){
				await new Promise((resolve) => setTimeout(resolve, 2000));
				setAlert({message:"Login realizado com sucesso!", severity:"success"})
			}else{
				await new Promise((resolve) => setTimeout(resolve, 2000));
				setAlert({message:"Usuário não encontrado!", severity:"error"})
			}
		} catch (error) {
			console.error("Erro no login:", error);
			setAlert({ message: "Erro ao realizar login. Tente novamente.", severity: "error" });
		} finally {
			setIsLoading(false);
		}
	};
	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isLoading,
		reset,
		alert,
		setAlert
	};
};
export default useLogin;
