import ImageCard from '../../general/ImageCard';

export default function Repos() {
  return (
    <>
      <ImageCard
        description={`Welcome to GitStream a place for all your push, pulls and merges. In this section you'll find all the developers.`}
        heading='Repository'
        img='../src/img/dev.jpg'
        languages={[
          { text: 'Code', colour: 'bg-emerald-400' },
          { text: 'Github', colour: 'bg-indigo-400' },
        ]}
      />
    </>
  );
}
