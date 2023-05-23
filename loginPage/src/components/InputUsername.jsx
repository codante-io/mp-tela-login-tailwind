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
        className="rounded-2xl h-16 bg-zinc-900
        hover:border-4 border-pink-500 max-sm:h-11"
        onChange={ (e) => handlechange(e.target) }
      />
    </label>
  );
}

export default InputUsername;
