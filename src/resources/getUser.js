import API from '../services/github.api';

async function getUser(user) {
  return await API.get(`/users/${user}`);
};

export default getUser;