import illustration from "../assets/illustration.svg";
import LoginForm from "./form";

const LoginPage = () => {
	return (
		<main className="bg-blue-100 text-white w-full min-h-screen flex items-center justify-center p-4 xs:p-2 sm:p-6">
			<div className="bg-white rounded-lg w-full max-w-4xl lg:h-3/5 shadow-2xl flex items-center justify-center p-6 md:p-8 sm:w-[90%] overflow-hidden">
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full items-center justify-center px-4 xs:px-2 sm:px-6">
					<div className="hidden md:flex justify-center items-center">
						<img
							src={illustration}
							className="w-full sm:w-3/4 md:w-auto max-w-full object-contain max-h-[70vh]"
							alt="Ilustração de ferramentas de vigilância"
						/>
					</div>
					<div className="p-4 sm:p-6 w-full flex-grow bg-blue-100 rounded-lg shadow-xl">
						<LoginForm />
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
