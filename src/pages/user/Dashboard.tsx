import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/general/Navbar';
import Tags from '../../components/dashboard/Tags';
import Trending from '../../components/dashboard/Trending';
import Feed from '../../components/dashboard/Feed';
import Dev from '../../components/dashboard/sections/Dev';
import Repos from '../../components/dashboard/sections/Repos';
import Follow from '../../components/dashboard/sections/Follow';
import NotFound from '../NotFound';

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className='dashboard mt-14 mx-auto max-w-7xl'>
        <Tags />

        <Routes>
          <Route path='' element={<Feed />}>
            <Route path='/' element={<Dev />}></Route>
            <Route path='repos' element={<Repos />}></Route>
            <Route path='following' element={<Follow />}></Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Trending />
      </div>
    </>
  );
}
