export default class Ui {

    static displayBooks(book) {
    const store = document.querySelector('.book-list-container')
    const booklist = document.createElement('li');
    booklist.className = 'book';
    booklist.innerHTML = `
      <div class="book-title">${book.title}</div>
      <div class="book-author">${book.author}</div>
      <button class="rem-btn" id="${book.id}" >Remove</button>
      `;
    store.appendChild(booklist);
    }
}