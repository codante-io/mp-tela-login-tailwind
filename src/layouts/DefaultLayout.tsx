import { Outlet } from 'react-router-dom'
import '../styles/global.css'

export function DefaultLayout() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r font-body text-gray-400">
      <div className="h-full max-h-[654px] w-full max-w-[1106px] overflow-hidden rounded-[34px] bg-black shadow-form">
        <Outlet />
      </div>
    </div>
  )
}
