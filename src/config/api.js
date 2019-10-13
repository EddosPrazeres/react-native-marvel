import axios from 'axios'
import md5 from 'js-md5'

const url = "http://gateway.marvel.com"
const privateKey = "3dd6699238f625b6f13830a7b19e5bbdd732194b";
const publicKey = "1f298547149da280d6e00233f504e325";
const timestamp = Number(new Date())
const hash = md5.create().update(timestamp + privateKey + publicKey).hex()

const api = axios.create({
    baseURL: url,
    params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash
    },
})
  
export default api;