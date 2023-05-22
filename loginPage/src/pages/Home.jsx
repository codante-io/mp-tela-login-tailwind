import { useContext } from 'react';
import LoginContext from '../context/LoginContext';

function Home() {
  const { email } = useContext(LoginContext);
  return (
    <h1>
      { `Hello ${email}`}
    </h1>
  );
}

export default Home;
