import { nanoid } from 'nanoid';
import { useQueries, useQuery } from 'react-query';
import { getAllUsers, getUser } from '../../../adapters/users';
import { IAllUsers } from '../../../interfaces/interfaces';
import ImageCard from '../../general/ImageCard';
import UserCard from '../UserCard';

export default function Dev() {
  const { data: users } = useQuery('users', getAllUsers);

  const usersInfo = useQueries(
    users?.data.map((user: IAllUsers) => {
      return {
        queryKey: ['user', user.login],
        queryFn: () => getUser(user.login),
        enabled: !!users,
      };
    }) ?? []
  );

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

      {/* {usersInfo.map((user) => (
        <UserCard user={user} key={nanoid()} />
      ))} */}
    </div>
  );
}
