import axios from 'axios'
const url = 'http://api-clientes.test/api'

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})

export default api
