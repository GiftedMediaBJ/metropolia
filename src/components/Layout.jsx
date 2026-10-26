import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Layout = () => (
  <>
    <NavBar />
    <main>
      <Outlet />
    </main>
  </>
)