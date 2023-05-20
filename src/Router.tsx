import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Welcome } from './pages/Welcome'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Route>
    </Routes>
  )
}
