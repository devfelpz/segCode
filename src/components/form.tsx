import useLogin from "../hooks/useLogin";
import logo from "./../assets/mainLogo.svg";
import Alert from "./alert";
import InputField from "./input";
const LoginForm = () => {
	const { register, handleSubmit, onSubmit, errors, isLoading, alert,setAlert } = useLogin();

	return (
		<form
		  onSubmit={handleSubmit(onSubmit)}
		  className="w-full max-w-xs sm:max-w-md space-y-6"
		  aria-labelledby="login-form-title"
		>
			   {alert && (
        <Alert
          message={alert.message}
          severity={alert.severity}
          onClose={() => setAlert(null)}
        />
      )}
		  <div className="flex justify-center items-center mb-4">
			<img
			  src={logo}
			  className="max-w-full h-auto max-h-16 sm:max-h-24 md:max-h-32"
			  alt="SEGCODE Surveillance Tools"
			/>
		  </div>
	  
		  <div className="px-4 sm:px-6 py-4 flex flex-col justify-center gap-4 sm:gap-6">
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
			className={`w-full py-2 sm:py-3 text-white font-bold rounded-lg transition-transform transform-gpu text-sm sm:text-base ${
			  isLoading
				? "bg-gray-400 cursor-not-allowed"
				: "bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-md hover:-translate-y-1"
			}`}
			disabled={isLoading}
			aria-busy={isLoading}
			aria-label={isLoading ? "Entrando..." : "Entrar"}
		  >
			{isLoading ? (
			  <span className="flex items-center justify-center gap-2">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
				  className="animate-spin h-5 w-5 text-white"
				  xmlns="http://www.w3.org/2000/svg"
				  fill="none"
				  viewBox="0 0 24 24"
				>
				  <circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				  />
				  <path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
				  />
				</svg>
				Entrando...
			  </span>
			) : (
			  "Entrar"
			)}
		  </button>
		</form>
	  );
	  
};

export default LoginForm;
