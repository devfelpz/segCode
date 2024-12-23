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
			// Implementação do metodo de login
			console.log("Enviando dados do login:", data);

			await new Promise((resolve) => setTimeout(resolve, 2000));
		} catch (error) {
			console.error("Erro no login:", error);
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
	};
};
export default useLogin;
