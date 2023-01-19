import Book from './modules/book.js';
import UI from './modules/UI.js';
import Storage from './modules/localstore.js';

// ====== These are the elements that will be accessed universally
const form = document.getElementById('form');
const booksContainer = document.querySelector('.book-list-container');

// Display Books When Page is reloaded
UI.updateBooks(document.querySelector('.book-list-container'));

// Removes Books from the UI and Local Storage
const removeBook = (books) => {
  books.forEach((book) => {
    book.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-button')) {
        Storage.removeBook(book.id);
        UI.removeBook(book.id);
      }
    });
  });
};
removeBook(document.querySelectorAll('.book'));

// ====== Form Function : Listens for Form Submission then executes Functions ======
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const book = new Book(title, author);
  // Test for valid Input
  const validate = /[a-zA-Z]/g;

  if (validate.test(title) && validate.test(author) && UI.validate(book)) {
    Storage.addBook(book);
    UI.addBook(book);
    UI.updateBooks(booksContainer);
    form.reset();
  }
  const books = document.querySelectorAll('.book');
  removeBook(books);
});
