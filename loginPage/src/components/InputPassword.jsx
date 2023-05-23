import { useContext } from 'react';
import LoginContext from '../context/LoginContext';

function InputPassword() {
  const { setPassword } = useContext(LoginContext);
  const handlechange = (x) => {
    setPassword(x.value);
  };
  return (
    <label className="flex flex-col">
      Password
      <input
        type="password"
        className="rounded-2xl h-16 bg-zinc-900
        hover:border-4 border-pink-500 max-sm:h-11"
        onChange={ (e) => handlechange(e.target) }
      />
    </label>
  );
}

export default InputPassword;
