import { Link } from 'react-router-dom';
import { useContext } from 'react';
import InputPassword from '../components/InputPassword';
import InputUsername from '../components/InputUsername';
import LoginButton from '../components/LoginButton';
import LoginContext from '../context/LoginContext';

function Login() {
  const { isNull } = useContext(LoginContext);

  return (
    <section className="flex w-5/6 h-5/6 bg-black m-auto rounded-2xl">
      <div
        className="flex flex-col flex-wrap w-2/5 text-white
        justify-evenly content-center h-5/6 self-center"
      >
        <h1 className="text-6xl font-semibold">
          Faça seu login
          <span className="text-fuchsia-400 text-5xl">
            .
          </span>
        </h1>
        <div className="flex flex-col justify-between">
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
    </section>
  );
}

export default Login;
