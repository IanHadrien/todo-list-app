import axios from 'axios'

const baseAddress = 'http://127.0.0.1:8000/api'
const controller = 'todos'

const TodoApi = {
  GetAll: async () => {
    try {
      const responseData = await axios.get(`${baseAddress}/${controller}`)
      return responseData
    } catch (error) {
      throw error.response.data
    }
  },
  Add: async (newData) => {
    try {
      const responseData = await axios.post(`${baseAddress}/${controller}`, newData)
      return responseData
    } catch (error) {
      throw error.response.data
    }
  },
  Delete: async (deleteId) => axios.delete(`${baseAddress}/${controller}/${deleteId}`),
}

export default TodoApi