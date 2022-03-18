import { Link } from 'react-router-dom';

export default function InnerNav() {
  return (
    <>
      <header>
        <nav className=' flex '>
          <ul className='flex '>
            <li>
              <Link
                to=''
                className=' inline-flex p-4 text-[1.15rem] text-neutral-500 hover:text-neutral-800  focus:text-neutral-800 focus:font-medium focus:underline transition-all'
              >
                Devs
              </Link>{' '}
            </li>

            <li>
              <Link
                to='following'
                className=' inline-flex p-4 text-[1.15rem] text-neutral-500 hover:text-neutral-800 focus:text-neutral-800 focus:font-medium focus:underline transition-all'
              >
                Following
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link
                to='repos'
                className=' inline-flex p-4 text-[1.15rem] text-neutral-500 hover:text-neutral-800  focus:text-neutral-800 focus:font-medium focus:underline transition-all'
              >
                Repos
              </Link>{' '}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
