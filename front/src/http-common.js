import axios from 'axios'

export default axios.create({
  baseURL: 'https://backend-hcms.herokuapp.com/api/customer/',
  headers: {
    'Content-Type': 'application/json',
  },
})
