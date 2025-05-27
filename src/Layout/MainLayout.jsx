import { Outlet } from 'react-router'
import Nav_bar from '../components/Shared/Nav_bar'

export default function MainLayout() {
  return (
    <div className='container mx-auto'>
     <Nav_bar/>
     <Outlet/>
    </div>
  )
}
