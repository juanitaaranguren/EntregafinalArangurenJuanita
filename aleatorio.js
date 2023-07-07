const btnRandom = document.getElementById('btn-random');
const poemContainer = document.getElementById('poem');

btnRandom.addEventListener('click', function() {
  fetch('https://poetrydb.org/random/1')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      const poem = data[0].lines.join('<br>');
      poemContainer.innerHTML = poem;
    })
    .catch(function(error) {
      console.log('Hubo un error al obtener los datos de la API:', error);
    });
});
