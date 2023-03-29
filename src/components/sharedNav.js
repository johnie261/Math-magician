import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedNav = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default SharedNav;
