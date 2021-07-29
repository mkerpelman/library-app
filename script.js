let myLibrary = [];

const newBook = document.querySelector('#new-book');

newBook.addEventListener('click', generateNewBookForm());

function Book(title, author, pageCount, userRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.userRead = userRead;
  this.reportInfo = function() {
    return `${this.title}, ${this.author}, ${this.pageCount} pages, ${didUserRead(this.userRead)}.`
  };
};

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
};

function didUserRead(input) {
  if (input) {
    return 'read';
  } else {
    return 'not yet read';
  };
};

function updateLibrary(libraryArray) {
  const table = document.querySelector('#library-table');
  libraryArray.forEach(book => {
    let attributeList = ['title', 'author', 'pageCount', 'userRead'];
    const newRow = document.createElement('tr');
    attributeList.forEach(attribute => {
      const data = document.createElement('td');
      data.textContent = book[attribute];
      newRow.append(data);
    });
    table.append(newRow);
  });
};

function generateNewBookForm() {
  
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 304, true);
const theMillionaireFastlane = new Book("The Millionaire Fastlane", "M.J. DeMarco", 338, true);
myLibrary.push(theHobbit, theMillionaireFastlane);

updateLibrary(myLibrary);
