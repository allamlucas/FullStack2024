import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
  return axios.get(baseUrl)

}

const create = countryObject => {
  return axios.post(baseUrl, countryObject)
}

const update = (id, countryObject) => {
  return axios.put(`${baseUrl}/${id}`, countryObject)
}

const del = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};


export default { getAll, create, update, del}   