import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 1acd11f0671ea428527af7d7df243ce6ad3f527a0be886d6e63591c189b1d025'
    }

})