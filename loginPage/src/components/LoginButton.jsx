import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();
  return (
    <button
      type="submit"
      onClick={ () => navigate('home') }
    >
      Entrar
    </button>
  );
}

export default LoginButton;
