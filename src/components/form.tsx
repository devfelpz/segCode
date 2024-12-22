import logo from "./../assets/mainLogo.svg";
import InputField from "./input";

const LoginForm = () => {
	return (
		<form className="w-full space-y-6" aria-labelledby="login-form-title">
			<div className="flex justify-center items-center mb-4">
				<img
					src={logo}
					className="max-w-full w-auto max-h-16 md:max-h-32"
					alt="SEGCODE Surveillance Tools"
				/>
			</div>

			<div className="px-4 sm:px-6 py-4 flex flex-col justify-center gap-6">
				<InputField id="usuario" label="Usuário" type="text" />
				<InputField id="senha" label="Senha" type="password" />
			</div>

			<button
				type="submit"
				className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:shadow-md transition-transform transform-gpu hover:-translate-y-1 text-sm sm:text-base"
			>
				Entrar
			</button>
		</form>
	);
};

export default LoginForm;
