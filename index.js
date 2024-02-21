console.log('JavaScript file loaded');

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#jokeForm');
  const jokeContainer = document.getElementById('jokeContainer');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value || 'friend';

    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();

      if (response.ok) {
        const joke = data.joke;
        jokeContainer.textContent = `Hello, ${name}! Here's a joke for you: ${joke}`;
        jokeContainer.style.display = 'block';
        errorMessage.style.display = 'none'; 
      } else {
        throw new Error('Failed to fetch joke');
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
      errorMessage.textContent = 'Error: ' + error.message;
      errorMessage.style.display = 'block';
      jokeContainer.style.display = 'none'; 
    }
  });
});


