import { getAuth, signOut } from 'firebase/auth';

export default function Navbar() {
  const auth = getAuth();

  function userSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 h-16 bg-white z-[100] border-b-[1.2px] border-b-neutral-300'>
        <div className='w-full h-14 m-auto flex items-center relative px-4'>
          <a href='/dashboard' className=' text-2xl mt-1 font-semibold'>
            <i className='fa-brands fa-github fa-lg'></i> GitStream
          </a>
          <div className=' max-w-sm'></div>
          <div className='flex ml-auto h-full items-center'>
            <button
              className='px-3 py-2 mt-1 text-neutral-900  border-[1.5px] hover:bg-neutral-900 hover:text-white border-neutral-900  transition-all'
              onClick={() => {
                userSignOut();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
