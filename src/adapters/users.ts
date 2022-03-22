import { get } from './request';

export const getAllUsers = () => {
  let response = get('/users');
  return response;
};

export const getUser = (user: string) => {
  let response = get(`/users/${user}`);
  return response;
};
