const myLibrary = [];

function Book(title, author, pages, read, cover) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.cover = cover;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read");

myLibrary.push(book1);

function addBookToLibrary() {
  let newBook = dialog.showModal();
}

function displayBooks() {
  let main = document.getElementById("main");
  let title = document.createElement("h2");
  let list = document.createElement("ul");

  for (let i = 0; i < myLibrary.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = myLibrary[i];
    list.appendChild(listItem);
  }

  main.appendChild(title);
  main.appendChild(list);
}
