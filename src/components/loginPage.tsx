import illustration from "./../assets/illustration.svg";
import logo from "./../assets/mainLogo.svg";
import InputField from "./input";

const LoginPage = () => {
	return (
		<main className="bg-blue-100 text-white w-full h-screen flex items-center justify-center p-4 sm:p-6 min-h-96">
			<div className="bg-white rounded-lg shadow-2xl flex items-center justify-center p-6 sm:p-10 w-full max-w-7xl h-3/4 landscape:px-24  landscape:p-[180px]">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full items-center">
					<div className="hidden md:flex justify-center items-center ">
						<img
							src={illustration}
							className="sm:w-3/4 md:w-auto"
							alt="Ilustração de ferramentas de vigilância"
						/>
					</div>

					<div className="p-4 sm:p-8 w-full max-w-sm sm:max-w-md flex-grow bg-blue-100 rounded-lg shadow-xl">
						<form className="space-y-6" aria-labelledby="login-form-title">
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
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
