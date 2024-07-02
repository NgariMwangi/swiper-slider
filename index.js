const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getReviews', async (req, res) => {
  try {
    const apiKey = 'AIzaSyBBuHE9r7f9DHRwadbh6bC1ZEeq122a3nc';
    const placeId = 'ChIJQ7Ynx9kRLxgRZ_tzYOV1V_4';
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching reviews');
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
