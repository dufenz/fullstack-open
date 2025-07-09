import axios from 'axios'

const baseUrl = '/api/notes'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
