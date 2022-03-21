import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { useQueries, useQuery } from 'react-query';
import { getAllUsers, getUser } from '../../../adapters/users';
import { IAllUsers } from '../../../interfaces/interfaces';
import ImageCard from '../../general/ImageCard';
import UserCard from '../UserCard';

export default function Dev() {
  const { data: users } = useQuery('users', getAllUsers);
  const db = getFirestore();

  const usersInfo = useQueries(
    users?.data.map((user: IAllUsers) => {
      return {
        queryKey: ['user', user.login],
        queryFn: () => getUser(user.login),
        enabled: !!users,
      };
    }) ?? []
  );

  function getCookie(name: string) {
    let data = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return data ? JSON.parse(data[2]) : null;
  }

  const authUser = getCookie('user');

  async function followUserToggle(user: string) {
    const userRef = doc(db, 'users', authUser.user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      let isFollowingArr: string[] = userSnap.data().following;

      if (!isFollowingArr.includes(user)) {
        await updateDoc(userRef, {
          following: [...isFollowingArr, user],
        });
      } else {
        await updateDoc(userRef, {
          following: isFollowingArr.filter((following) => following !== user),
        });
      }
    } else {
      console.error('No match');
    }
  }

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

      {usersInfo.map((user) => (
        <UserCard
          user={user}
          key={nanoid()}
          followUserToggle={followUserToggle}
        />
      ))}
    </div>
  );
}
