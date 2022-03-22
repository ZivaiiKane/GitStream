import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useQueries } from 'react-query';
import { getUser } from '../../../adapters/users';
import { IAllUsers } from '../../../interfaces/interfaces';
import { users } from '../../../users';
import AnimatedPage from '../../general/AnimatedPage';
import ImageCard from '../../general/ImageCard';
import UserCard from '../UserCard';

export default function Follow() {
  const [following, setFollowing] = useState([]);

  const db = getFirestore();

  useEffect(() => {
    getFollowing();
    console.log('Following: ', following);
  }, []);

  function getCookie(name: string) {
    let data = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return data ? JSON.parse(data[2]) : null;
  }

  const authUser = getCookie('user');

  async function getFollowing() {
    const userRef = doc(db, 'users', authUser.user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      setFollowing(userSnap.data().following);
    } else {
      console.error('No match');
    }
  }

  const usersInfo = useQueries(
    following.map((user: string) => {
      return {
        queryKey: ['Following', user],
        queryFn: () => getUser(user),
        enabled: !!following,
      };
    }) ?? []
  );

  const isLoading = usersInfo.some((query) => query.isLoading);

  return (
    <>
      <AnimatedPage>
        <ImageCard
          description={`This is the place where you can find all the people you follow. Keep track of your favorite developers all in one place.`}
          heading='Following'
          img='../src/img/follow.jpg'
          languages={[
            { text: 'Community', colour: 'bg-pink-400' },
            { text: 'Network', colour: 'bg-blue-400' },
          ]}
        />

        {!isLoading ? (
          usersInfo.map((user) => <UserCard user={user} key={nanoid()} />)
        ) : (
          <p className=' text-center text-3xl mt-8 text-neutral-700'>
            Loading...
          </p>
        )}
      </AnimatedPage>
    </>
  );
}
