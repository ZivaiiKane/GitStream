import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: {
    Authorization: `${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
  },
});

export function get(url: string) {
  return instance.get(url);
}
