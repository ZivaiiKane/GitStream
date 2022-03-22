export default function RepoCard({ repo }: any) {
  console.log('Card: ', repo);
  return (
    <a href={`${repo.html_url}`}>
      <div className='repo-card bg-white p-4 border-[1.2px] border-neutral-700 transition-all my-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              src={`${repo.owner.avatar_url}`}
              alt=''
              className='w-9 h-9 rounded-lg bg-neutral-300'
            />
          </div>
          <div className=' inline-block relative text-lg font-normal text-neutral-700 ml-2 mr-auto'>
            <h1>{repo.full_name}</h1>
          </div>
        </div>
        <div className=' pl-10'>
          <h2 className=' font-medium  text-xl break-words text-neutral-700'>
            {repo.description}{' '}
          </h2>
          <div className=' flex flex-wrap gap-[1px] pt-4'>
            <span className='stats text-[0.9em] tracking-[0.15ch] inline-block font-normal px-[0.5rem] py-[0.2rem] mt-2 mr-4 text-white bg-red-400 transition-all'>
              {repo.language ? `#${repo.language}` : `not sure`}
            </span>
          </div>
          <div className=''></div>
        </div>
      </div>
    </a>
  );
}
