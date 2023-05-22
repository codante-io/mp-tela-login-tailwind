import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState([]);

  const contextLogin = useMemo(() => ({
    email,
    setEmail,
  }), [email]);
  return (
    <LoginContext.Provider value={ contextLogin }>
      { children }
    </LoginContext.Provider>
  );
}
export default LoginProvider;
LoginProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
