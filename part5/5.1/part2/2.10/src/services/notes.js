import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/exampleapp/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }
