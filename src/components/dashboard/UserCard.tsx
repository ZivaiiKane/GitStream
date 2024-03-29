export default function UserCard({ user, followUserToggle }: any) {
  return (
    <div className=' user-card flex flex-row p-4 border-[1.3px] border-neutral-700 my-8 transition-all'>
      <div className=' w-26 h-26'>
        <img
          className=' w-28 h-28 transition-all'
          src={user.data.data.avatar_url}
          alt='user'
        />
      </div>
      <div className='mt-2 ml-4'>
        <h1 className=' text-2xl font-medium text-neutral-800 '>
          {user.data.data.name ? user.data.data.name : 'Name??'}
        </h1>
        <p className='text-lg text-normal text-neutral-700'>
          @{user.data.data.login}
        </p>

        <div className='flex justify-between items-center mt-2'>
          <div className=' flex items-center'>
            <span className='stats text-[0.9em] tracking-[0.15ch] inline-block font-normal px-[0.5rem] py-[0.2rem] mt-2 mr-4 text-white bg-blue-400 transition-all'>
              Following: {user.data.data.following}
            </span>
            <span className='stats text-[0.9em] tracking-[0.15ch] inline-block font-normal px-[0.6rem] py-[0.2rem] mt-2 mr-4 text-white bg-rose-400 transition-all'>
              Followers: {user.data.data.followers}
            </span>
          </div>

          <div className='flex items-center'>
            <a href={`${user.data.data.html_url}`}>
              <button className=' px-2 py-[0.1rem] mt-2 mr-4  border-[1.6px] border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all'>
                View
              </button>
            </a>

            <button
              className=' px-2 py-[0.1rem] mt-2 mr-4 text-neutral-900  border-[1.6px] border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all'
              onClick={() => {
                followUserToggle(user.data.data.login);
              }}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
