import { useContext } from 'react';
import LoginContext from '../context/LoginContext';

function InputUsername() {
  const { setEmail } = useContext(LoginContext);
  const handlechange = (x) => {
    console.log(x.value);
    setEmail(x.value);
  };

  return (
    <label className="flex flex-col">
      Email
      <input
        type="text"
        className="rounded-2xl h-16"
        onChange={ (e) => handlechange(e.target) }
      />
    </label>
  );
}

export default InputUsername;
