import axios from "axios";


//receive trails from Hiking API
const BASEURL = 'https://www.hikingproject.com/data/get-trails?';
const latRef =  'lat=';
const longRef = '&lon=';
const results = '&maxResults=50';
const APIKEY = '&key=200310958-80eadbd0eda211e9f1bec2cca75b17cb';
          export default {
  searchTrails: function(lat, long) {
    return axios.get(BASEURL + latRef + lat + longRef + long + results + APIKEY )
  }
  // Gets all trails
  getTrails: function() {
    return axios.get("/api/trails");
  },
  // Gets the book with the given id
  getTrail: function(id) {
    return axios.get("/api/trails/" + id);
  },
  // Deletes the book with the given id
  deleteTrail: function(id) {
    return axios.delete("/api/trails/" + id);
  },
  // Saves a book to the database
  saveTrail: function(trailData) {
    return axios.post("/api/trails", trailData);
  }
};
