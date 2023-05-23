import { Link } from 'react-router-dom';
import { useContext } from 'react';
import InputPassword from '../components/InputPassword';
import InputUsername from '../components/InputUsername';
import LoginButton from '../components/LoginButton';
import LoginContext from '../context/LoginContext';

function Login() {
  const { isNull } = useContext(LoginContext);

  return (
    <section
      className=" flex justify-between w-5/6 h-5/6
      bg-black m-auto rounded-2xl max-sm:w-full"
    >
      <div
        className="flex flex-col flex-wrap w-2/5 text-white
        justify-evenly content-center h-5/6 self-center max-sm:w-5/6 m-auto"
      >
        <h1 className="text-6xl font-semibold">
          Faça seu login
          <span className="text-fuchsia-400 text-5xl">
            .
          </span>
        </h1>
        <div className="flex flex-col justify-between w-5/6">
          <InputUsername />
          <InputPassword />
          <Link to="*" className="self-end hover:font-bold">
            <span>Esqueci minha senha</span>
          </Link>
        </div>
        <div className="flex flex-col text-center">
          <LoginButton />
          <Link to="*" className="hover:font-bold">
            <span>Ainda não tenho uma conta</span>
          </Link>
          { isNull && <span>O campo Email deve ser preenchido</span>}
        </div>
      </div>
      <div className="bg-zinc-50 w-6/12 opacity-40 max-sm:hidden">
        <img
          src="https://w.forfun.com/fetch/36/36a26536d26fde21a70ea59dbb05933c.jpeg"
          alt="desenho montanha flutuante"
          className="h-full"
        />
      </div>
    </section>
  );
}

export default Login;
