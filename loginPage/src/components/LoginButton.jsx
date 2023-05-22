import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

function LoginButton() {
  const { email,
    setIsNull,
    password } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleClick = () => {
    if (email && password) {
      navigate('home');
    }
    setIsNull(true);
  };
  return (
    <button
      type="submit"
      className="bg-gradient-to-r from-violet-500 via-pink-500 to-rose-200
      h-11 rounded-xl text-lg font-bold hover:h-14"
      onClick={ handleClick }
    >
      Entrar
    </button>
  );
}

export default LoginButton;
