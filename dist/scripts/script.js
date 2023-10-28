const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function addBookToLibrary() {
  let showModal = document.getElementById("dialog");
  dialog.showModal();

  let newBook = new Book();

  let form = document.getElementById("form");
  form.addEventListener("submit", function(addBook) {
    addBook.preventDefault();
    newBook.title = document.getElementById("title").value;
    newBook.author = document.getElementById("author").value;
    newBook.pages = document.getElementById("pages").value;
    newBook.read = document.getElementById("read").value;

    showModal.close();
  });
 
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    console.log(book.info());
  });
}
