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
        <div>
          <InputUsername />
          <InputPassword />
          <span>Esqueci minha senha</span>
        </div>
        <div className="flex flex-col">
          <LoginButton />
          <span>Ainda não tenho uma conta</span>
          { isNull && <span>O campo Email deve ser preenchido</span>}
        </div>
      </div>
    </section>
  );
}

export default Login;
