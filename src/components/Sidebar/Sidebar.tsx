import TwitterLogo from '../../assets/twitter-logo.svg';
import {  
  House, 
  Hash, 
  Bell, 
  Envelope, 
  BookmarkSimple, 
  FileText, 
  User, 
  DotsThreeCircle,
  PencilSimple 
} from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={TwitterLogo} alt="Logo" className='logo'/>
      <nav className='nav'>
        <NavLink to='/'>
          <House weight='fill'/>
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button className='new-tweet'>
          <PencilSimple />
          <span>Twitter</span>
      </button>
    </aside>
  )
}

export default Sidebar