import Book from './modules/book.js';
import Ui from './modules/UI.js';
import Clear from './modules/clear.js';
import storage from './modules/localstore.js';
// import RemoveBook from './modules/remove.js';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  storage.setbook(book);
  Clear.clearFields();
  Ui.displayBooks(book);
});