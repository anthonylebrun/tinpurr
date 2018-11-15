import axios from 'axios'

const CatAPI = function(apiKey = '') {
  this.httpClient = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/',
    headers: { 'x-api-key': apiKey }
  })
}

CatAPI.prototype.getRandomCats = function(howLotz) {
  return this.httpClient.get('/images/search', {
    params: {
      size: 'med',
      limit: howLotz
    }
  })
}

CatAPI.prototype.markAsFavorite = function(subID, imageID) {
  this.httpClient.post('/favourites', {
    sub_id: subID,
    image_id: imageID
  })
}

CatAPI.prototype.getFavorites = function(subID) {
  return this.httpClient.get('/favourites', {
    params: {
      sub_id: subID
    }
  })
}

export default new CatAPI(process.env.VUE_APP_CAT_API_KEY)
