import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import Nav_bar from '../components/Shared/Nav_bar';

export default function MainLayout() {
  return (
    <div className='container mx-auto'>
     <Nav_bar/>
     <Outlet/>
     <Toaster position="top-center" richColors={true} visibleToasts={1} />
    </div>
  )
}
