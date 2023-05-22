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
        className="rounded-2xl h-16 text-neutral-950"
        onChange={ (e) => handlechange(e.target) }
      />
    </label>
  );
}

export default InputPassword;
