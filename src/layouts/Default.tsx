import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Default = () => {
  return (
    <div className='content'>
      <Sidebar />

      <div className="tweets">
        <Outlet/>
      </div>
    </div>
  )
}

export default Default;