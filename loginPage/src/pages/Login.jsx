import Input from '../components/Input';

function Login() {
  return (
    <section className="w-5/6 h-5/6 bg-black m-auto rounded-2xl">
      <div className="flex ">
        <h1 className="text-4xl text-white font-semibold">
          Faça seu login
          <span className="text-fuchsia-400 text-5xl">
            .
          </span>
          <Input />
          <Input />
        </h1>
      </div>
    </section>
  );
}

export default Login;
