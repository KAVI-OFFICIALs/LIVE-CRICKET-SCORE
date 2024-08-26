document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/scores')
    .then(response => response.json())
    .then(data => {
      const scoresList = document.getElementById('scores-list');
      data.matches.forEach(match => {
        const listItem = document.createElement('li');
        listItem.textContent = `${match.team1} vs ${match.team2}: ${match.score}`;
        scoresList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching scores:', error));
});
