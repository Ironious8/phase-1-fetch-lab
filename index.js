function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(response=>response.json())
  .then(books=> {
    renderBooks(books)
  });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}


