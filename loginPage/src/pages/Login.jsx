import InputPassword from '../components/InputPassword';
import InputUsername from '../components/InputUsername';

function Login() {
  return (
    <section className="flex w-5/6 h-5/6 bg-black m-auto rounded-2xl">
      <div
        className="flex flex-col flex-wrap w-2/5 text-white
        justify-around content-center"
      >
        <h1 className="text-6xl font-semibold">
          Faça seu login
          <span className="text-fuchsia-400 text-5xl">
            .
          </span>
        </h1>
        <InputUsername />
        <InputPassword />
      </div>
    </section>
  );
}

export default Login;
