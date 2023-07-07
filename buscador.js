fetch('productos.json')
  .then(function(response) {
    if (!response.ok) {
      throw new Error('No podemos atenderte ahora' + response.status);
    }
    return response.json();
  })
  .then(function(data) {
    const bookList = document.getElementById('book-list');

    data.forEach(function(libro) {
      const li = document.createElement('li');
      li.textContent = libro.nombre + ' - ' + libro.precio;
      bookList.appendChild(li);
    });
  })
  .catch(function(error) {
    console.log('¡Visita tu librería favorita más tarde!', error);
  });

const searchInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');

searchInput.addEventListener('input', function(event) {
  const searchText = event.target.value.toLowerCase();
  const books = bookList.getElementsByTagName('li');

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookText = book.textContent.toLowerCase();

    if (bookText.includes(searchText)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  }
});
