import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';
import illustration from "./../assets/illustration.svg";
import mainLogo from "./../assets/mainLogo.svg";

const LoginPage = () => {
  return (
<main className="bg-stone-800 text-white w-full h-screen flex flex-col overflow-y-auto">
  <header>
    <div className="flex mx-7 my-7">
      <img src={mainLogo} alt="Logo da SegCode" className="w-60" />
    </div>
  </header>
  <section className="flex-grow grid grid-cols-1 md:grid-cols-2">
    <div className="flex justify-center items-center px-4 md:px-0">
      <form className="w-full max-w-md px-4 sm:px-8 md:px-0" aria-labelledby="login-form-title">
        <div className="flex flex-col items-center justify-center">
          <p id="login-form-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
            SEGCODE
          </p>
          <p className="text-xs sm:text-sm ml-0 sm:ml-20 uppercase text-gray-400 mt-2 tracking-widest">
            SURVEILLANCE TOOLS
          </p>
        </div>
        <div className="mx-4 my-6">
          <label htmlFor="username">Usuário</label>
          <div className="mt-2 flex bg-stone-700">
            <input
              id="username"
              name="username"
              className="peer w-full rounded-r-md border border-gray-300 px-4 py-2 text-gray-300 outline-none transition-colors duration-300 focus:border-blue-700"
              type="text"
              placeholder="usuário"
              aria-label="Nome de usuário"
            />
            <span className="order-first rounded-l-md bg-gray-400 p-3 transition-colors duration-300 peer-focus:bg-blue-600 peer-focus:text-white">
              <UserIcon className="size-6" />
            </span>
          </div>
        </div>
        <div className="mx-4 my-6">
          <label htmlFor="password">Senha</label>
          <div className="mt-2 flex bg-stone-700">
            <input
              id="password"
              name="password"
              className="peer w-full rounded-r-md border border-gray-300 px-4 py-2 text-gray-300 outline-none transition-colors duration-300 focus:border-blue-700"
              type="password"
              placeholder="senha"
              aria-label="Senha"
            />
            <span className="order-first rounded-l-md bg-gray-400 p-3 transition-colors duration-300 peer-focus:bg-blue-600 peer-focus:text-white">
              <LockClosedIcon className="size-6 font-bold" />
            </span>
          </div>
        </div>
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 mt-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-bold transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg w-full"
          type="submit"
          aria-label="Entrar no sistema SegCode"
        >
          Entrar
        </button>
      </form>
    </div>
    <div className="hidden md:flex justify-center items-center">
      <img src={illustration} className='max-w-full sm:w-2/3 md:w-max ' alt="Ilustração de ferramentas de vigilância" />
    </div>
  </section>
  <footer className="bg-stone-800 p-4 border-t border-stone-600">
    <div className="text-gray-400 text-sm text-right">
      <p>SegCode Sistema: v3.0</p>
    </div>
  </footer>
</main>
  )
}

export default LoginPage