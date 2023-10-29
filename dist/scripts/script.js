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
    let bookTr = document.createElement("tr");
    bookTr.classList.add("bg-slate-300", "text-center", "font-semibold");
    
    let bookTitle = document.createElement("td");
    bookTitle.classList.add("border", "border-slate-700");
    bookTitle.innerText = book.title;

    let bookAuthor = document.createElement("td");
    bookAuthor.classList.add("border", "border-slate-700");
    bookAuthor.innerText = book.author;

    let bookPages = document.createElement("td");
    bookPages.classList.add("border", "border-slate-700");
    bookPages.innerText = book.pages;

    let bookStatus = document.createElement("td");
    bookStatus.classList.add("border", "border-slate-700");
    bookStatus.innerText = book.read;

    // Here can add cover image if needed

    bookTr.appendChild(bookTitle);
    bookTr.appendChild(bookAuthor);
    bookTr.appendChild(bookPages);
    bookTr.appendChild(bookStatus);

    document.querySelector("tbody").appendChild(bookTr);
    // document.getElementById("booksTable").appendChild(bookTr);
  });
}
