import illustration from "./../assets/illustration.svg";
import logo from './../assets/mainLogo.svg';
import InputField from "./input";

const LoginPage = () => {
  return (
<main className="bg-blue-100 text-white w-full h-screen flex items-center justify-center">

  <div className="bg-white rounded-lg shadow-2xl flex items-center justify-center p-10 w-4/5 max-w-6xl h-4/6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
      <div className="flex justify-center items-center align">
        <img
          src={illustration}
          className="sm:w-2/3 md:w-auto"
          alt="Ilustração de ferramentas de vigilância"
        />
      </div>

      <div className="p-8 w-full max-w-md transform">
        <form className="space-y-6" aria-labelledby="login-form-title">
          <div className="flex justify-center items-center align">
             <img
                src={logo}
                className="max-w-full sm:w-2/3 md:w-auto"
                alt="SEGCODE Surveillance Tools"
              />
          </div>
          <div className='px-6 py-4 flex flex-col justify-center gap-8'>
          <InputField
              id="usuario"
              label="Usuário"
              type="text"
            />
             <InputField
              id="senha"
              label="Senha"
              type="password"
            />
          </div>
           
           
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:shadow-md transition-transform transform-gpu hover:-translate-y-1"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  </div>
</main>


  )
}

export default LoginPage