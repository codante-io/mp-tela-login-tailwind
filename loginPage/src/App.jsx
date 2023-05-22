import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoginProvider from './context/LoginProvider';

function App() {
  return (
    <LoginProvider>
      <Router>
        <section className="flex justify-center h-screen bg-slate-900">
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </section>
      </Router>
    </LoginProvider>
  );
}

export default App;
