export default function Login() {
  return (
    <div>
      <h1 >Faça seu login <span>.</span></h1>
        Email
      <label htmlFor="email">
        <input type="text" name="" id="email" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="text"  id="password" />
      </label>
      <p>Esqueci minha senha</p>
      <button type="button">Entrar</button>
      <p>Ainda não tenho uma conta</p>
      <img src="/src/assets/image1.png" alt="oi" />
    </div>
  )
}
