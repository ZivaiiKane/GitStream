import { get } from './request';

export const getUserRepos = (user: string) => {
  let response = get(`/users/${user}/repos`);
  return response;
};
