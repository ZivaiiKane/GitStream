export default function Navbar() {
  return (
    <>
      <header className='fixed top-0 left-0 right-0 h-16 bg-white z-[100] border-b-[1.2px] border-b-neutral-300'>
        <div className='w-full h-14 m-auto flex items-center relative px-4'>
          <a href='/dashboard' className=' text-2xl mt-1 font-semibold'>
            GitStream
          </a>
          <div className=' max-w-sm'></div>
          <div className='flex ml-auto h-full items-center'>
            <button className='px-3 py-2 mt-1 text-neutral-700  border-[1.5px] hover:bg-neutral-700 hover:text-white border-neutral-700  transition-all'>
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
