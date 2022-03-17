import { Outlet } from 'react-router-dom';
import InnerNav from './InnerNav';

export default function Feed() {
  return (
    <div>
      <InnerNav />
      <Outlet />
    </div>
  );
}
