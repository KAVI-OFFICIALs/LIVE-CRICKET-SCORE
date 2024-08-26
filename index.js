const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// Replace with your CricAPI key
const API_KEY = 'YOUR_CRICAPI_KEY';
const API_URL = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch live scores
app.get('/api/scores', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
