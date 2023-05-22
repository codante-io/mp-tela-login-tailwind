import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNull, setIsNull] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const contextLogin = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    isNull,
    setIsNull,
    emailValid,
    setEmailValid,
  }), [email, isNull, emailValid, password]);
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
