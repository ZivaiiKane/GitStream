import ImageCard from '../../general/ImageCard';

export default function Dev() {
  return (
    <div>
      <ImageCard
        img='src/img/repos.jpg'
        description={`Welcome to GitStream a place for all your push, pulls and merges. In this section you'll find all the developers.`}
        heading='Developers'
        languages={[
          { text: 'People', colour: 'bg-orange-400' },
          { text: 'Developers', colour: 'bg-red-400' },
        ]}
      />
    </div>
  );
}
