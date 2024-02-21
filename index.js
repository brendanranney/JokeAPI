const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/joke', async (req, res) => {
    const name = req.query.name || 'friend';
    try {
      // Fetch a random joke from JokeAPI
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
      const joke = response.data.joke;
  
      res.json({ joke: joke, name: name });
    } catch (error) {
      console.error('Error fetching joke:', error);
      res.status(500).json({ message: 'Error fetching joke' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});