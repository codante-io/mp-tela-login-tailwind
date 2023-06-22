import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='bg-gradient-to-br from-custom-gradient-0 via-custom-gradient-1 to-custom-gradient-2 flex items-center justify-center h-screen' >
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/welcome' element={<img className='h-full' src='/dist/assets/welcome-greetings.gif'/> } />
    </Routes>
    </div>
  )
}

export default App

