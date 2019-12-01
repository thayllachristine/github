import API from '../services/github.api'

async function getRepoList(user) {
  return await API.get(`/users/${user}/starred`)
}

export default getRepoList