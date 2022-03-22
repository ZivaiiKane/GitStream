import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useQueries } from 'react-query';
import { getUserRepos } from '../../../adapters/repos';
import AnimatedPage from '../../general/AnimatedPage';
import ImageCard from '../../general/ImageCard';
import RepoCard from '../RepoCard';

export default function Repos() {
  const [following, setFollowing] = useState([]);

  const db = getFirestore();

  useEffect(() => {
    getFollowing();
    return () => {};
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
        queryKey: ['Repos', user],
        queryFn: () => getUserRepos(user),
        enabled: !!following,
      };
    }) ?? []
  );

  const isLoading = usersInfo.some((query) => query.isLoading);

  return (
    <>
      <AnimatedPage>
        <ImageCard
          description={`Find all your networks repositories in one place. Here you can view the reops of everyone you are following.`}
          heading='Repository'
          img='../src/img/dev.jpg'
          languages={[
            { text: 'Code', colour: 'bg-emerald-400' },
            { text: 'Github', colour: 'bg-indigo-400' },
          ]}
        />

        {!isLoading ? (
          usersInfo.map((repos) =>
            repos.data?.data.map((repoData: any) => {
              return <RepoCard repo={repoData} key={nanoid()} />;
            })
          )
        ) : (
          <p className=' text-center text-3xl mt-8 text-neutral-700'>
            Loading...
          </p>
        )}
      </AnimatedPage>
    </>
  );
}
