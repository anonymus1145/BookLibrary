let myLibrary = [];

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
  let formText = dialog.querySelector("form");
  dialog.showModal();

  let newBook = new Book();

  let form = document.getElementById("form");
  form.addEventListener("submit", function (addBook) {
    addBook.preventDefault();
    newBook.title = document.getElementById("title").value;
    newBook.author = document.getElementById("author").value;
    newBook.pages = document.getElementById("pages").value;
    newBook.read = document.getElementById("read").value;
    
    showModal.close();
    formText.reset();

    if (!newBook.title || !newBook.author || !newBook.pages || !newBook.read) {
      newBook = null;
    } else {
      myLibrary.push(new Book(newBook.title, newBook.author, newBook.pages, newBook.read));
    }
  });
  console.log(newBook);
  console.log(myLibrary);
}

function displayBooks() {

  document.querySelector("tbody").innerHTML = "";

  myLibrary.forEach((book) => {

    let bookTr = document.createElement("tr");
    bookTr.classList.add("book", "bg-slate-300", "text-center", "font-semibold");

    let bookTitle = document.createElement("td");
    bookTitle.classList.add("book-title", "border", "border-slate-700");
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

    let bookButtons = document.createElement("td");
    bookButtons.classList.add("border", "border-slate-700");
    let divButtons = document.createElement("div");
    divButtons.classList.add("btn-group", "space-x-3");
    bookButtons.appendChild(divButtons);

    // Buttons
    let readBtn = document.createElement("button");
    readBtn.classList.add("inline-flex", "items-center", "justify-center", "px-2", "bg-blue-600", "text-black", "border-black", "border-2", "rounded-3xl", "hover:bg-blue-800", "hover:text-white");
    readBtn.innerText = "Edit Status";
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("inline-flex", "items-center", "justify-center", "px-2", "bg-red-600", "text-black", "border-black", "border-2", "rounded-3xl", "hover:bg-red-800", "hover:text-white");
    deleteBtn.innerText = "Delete";

    readBtn.addEventListener("click", () => {
      editBookStatus();
    });

    deleteBtn.addEventListener("click", function(event) {
      deleteBook(event);
    });
    
    divButtons.appendChild(deleteBtn);
    divButtons.appendChild(readBtn);

    // Here can add cover image if needed

    bookTr.appendChild(bookTitle);
    bookTr.appendChild(bookAuthor);
    bookTr.appendChild(bookPages);
    bookTr.appendChild(bookStatus);
    bookTr.appendChild(bookButtons);

    document.querySelector("tbody").appendChild(bookTr);
    // document.getElementById("booksTable").appendChild(bookTr);
  });
}

function deleteBook(event) {
  event.target.parentNode.parentNode.parentNode.remove();
}

function editBookStatus() {
  
}