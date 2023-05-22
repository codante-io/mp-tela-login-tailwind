import { useContext } from 'react';
import LoginContext from '../context/LoginContext';

function InputUsername() {
  const { setEmail } = useContext(LoginContext);
  const handlechange = (x) => {
    setEmail(x.value);
  };

  return (
    <label className="flex flex-col">
      Email
      <input
        type="text"
        className="rounded-2xl h-16 text-neutral-950 bg-zinc-900
        hover:border-4 border-pink-500"
        onChange={ (e) => handlechange(e.target) }
      />
    </label>
  );
}

export default InputUsername;
