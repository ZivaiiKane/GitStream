import { IImageCard } from '../../interfaces/interfaces';
import { nanoid } from 'nanoid';

export default function ImageCard({
  description,
  heading,
  languages,
  img,
}: IImageCard) {
  return (
    <div className=' bg-white border-[1.5px] border-neutral-700 '>
      <div>
        <img src={img} alt='technology' />
      </div>
      <div className='p-[1em] '>
        <h1 className=' font-semibold text-neutral-700 text-2xl mb-2'>
          {heading}
        </h1>

        <p className=' text-neutral-700 font-normal'>{description}</p>

        {languages.map((language) => (
          <span
            className={`text-[0.9em] inline-block tracking-[0.15ch] font-normal ${language.colour} text-white   py-[0.2em] px-[0.5em]  mt-2 mr-2 `}
            key={nanoid()}
          >
            #{language.text}
          </span>
        ))}
      </div>
    </div>
  );
}
