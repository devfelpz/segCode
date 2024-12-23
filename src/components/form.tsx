import useLogin from "../hooks/useLogin";
import logo from "./../assets/mainLogo.svg";
import InputField from "./input";

const LoginForm = () => {
	const { register, handleSubmit, onSubmit, errors, isLoading } = useLogin();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full space-y-6"
			aria-labelledby="login-form-title"
		>
			<div className="flex justify-center items-center mb-4">
				<img
					src={logo}
					className="max-w-full w-auto max-h-16 md:max-h-32"
					alt="SEGCODE Surveillance Tools"
				/>
			</div>

			<div className="px-4 sm:px-6 py-4 flex flex-col justify-center gap-6">
				<InputField
					id="usuario"
					label="Usuário"
					type="text"
					register={register}
					errorMessage={errors.usuario?.message}
				/>
				<InputField
					id="senha"
					label="Senha"
					type="password"
					register={register}
					errorMessage={errors.senha?.message}
				/>
			</div>

			<button
				type="submit"
				className={`w-full py-3 text-white font-bold rounded-lg transition-transform transform-gpu text-sm sm:text-base ${
					isLoading
						? "bg-gray-400 cursor-not-allowed"
						: "bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-md hover:-translate-y-1"
				}`}
				disabled={isLoading}
			>
				{isLoading ? "Entrando..." : "Entrar"}
			</button>
		</form>
	);
};

export default LoginForm;
