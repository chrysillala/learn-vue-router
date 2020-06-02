import axios from "axios"

// create axios instance and store it inside apiClient
const apiClient = axios.create({
  baseURL: "https://www.amiiboapi.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getCharacters() {
    return apiClient.get("/amiibo/?amiiboSeries=Super%20Smash%20Bros.")
  },
  getCharacter(id) {
    return apiClient.get("/amiibo/?id=" + id)
  }
}
