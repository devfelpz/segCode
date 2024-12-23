import illustration from "../assets/illustration.svg";
import LoginForm from "./form";

const LoginPage = () => {
	return (
		<main className="bg-blue-100 text-white w-full h-screen flex items-center justify-center p-4 sm:p-6 landscape:overflow-hidden">
			<div
				className="bg-white rounded-lg w-full max-w-4xl lg:h-3/5 shadow-2xl flex items-center justify-center p-6 md:p-8
    						landscape:max-h-[95vh] landscape:w-[90%] overflow-hidden"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full items-center justify-center px-4 sm:px-6">
					<div className="hidden md:flex justify-center items-center">
						<img
							src={illustration}
							className="sm:w-3/4 md:w-auto max-h-[70vh]"
							alt="Ilustração de ferramentas de vigilância"
						/>
					</div>
					<div
						className="p-4 sm:p-6 w-full max-w-sm sm:max-w-md flex-grow bg-blue-100 rounded-lg shadow-xl
        				landscape:max-h-[93vh] landscape:max-w-[75%]l"
					>
						<LoginForm />
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
