import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default { getAll, remove }
