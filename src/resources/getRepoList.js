import API from '../services/github.api';

async function getRepoList(user) {
  return await API.get(`/users/${user}/repos`);
};

export default getRepoList;