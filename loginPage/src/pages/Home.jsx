import { useContext } from 'react';
import LoginContext from '../context/LoginContext';

function Home() {
  const { email } = useContext(LoginContext);
  return (
    <div
      className="flex flex-col h-full items-center justify-center text-white text-4xl"
    >
      <h1>
        { `Hello ${email}`}
      </h1>
      <h2>Welcome to the first Codante challenge!!</h2>
    </div>
  );
}

export default Home;
