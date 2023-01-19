const booksContainer = document.querySelector('.book-list-container');

export default class UI {
  // Get Books from Local Storage and Updates the UI
  static updateBooks(booksContainer) {
    const books = JSON.parse(localStorage.getItem('books'));
    booksContainer.innerHTML = '';
    if (books) books.forEach((book) => this.addBook(book));
  }

  // Creates the UI's Book
  static addBook(book) {
    const bookUI = document.createElement('li');
    bookUI.className = 'book';
    const BookId = (book.title + book.author).replace(/\s/g, '');
    bookUI.setAttribute('id', (BookId));
    bookUI.innerHTML = `
                <p class="book-title">"
                    <span id='${BookId}title'>${book.title}</span>" by 
                    <span id='${BookId}author'>${book.author}</span>
                </p>
                <button class="${BookId}btn remove-button" type="button">
                    Remove
                </button>`;
    booksContainer.append(bookUI);
  }

  // Removes the Book
  static removeBook(BookId) {
    document.getElementById(BookId).remove();
  }

  // Check if book has been added
  static validate(book) {
    const books = JSON.parse(localStorage.getItem('books'));
    if (!books) return true;
    let count = 0;
    books.forEach((b) => {
      if (b.title === book.title && b.author === book.author) count += 1;
    });
    if (count === 0) return true;
    window.alert('Book title and author already added');
    return false;
  }
}