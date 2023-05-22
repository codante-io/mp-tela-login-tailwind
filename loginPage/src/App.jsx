import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <section className="flex justify-center h-screen bg-slate-900">
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
