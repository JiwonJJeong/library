const myLibrary=[];

// book object constructor
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function(){
        let infoText = this.title + " by " + this.author + ", " + this.pages + " pages, ";
        if (isRead){
            return infoText + "read.";
        } else {
            return infoText + "not read yet.";
        }
    }
}

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary(theHobbit);
const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 208, true);
addBookToLibrary(theGreatGatsby);
console.log(myLibrary);
console.log(myLibrary[0].info());

function displayBooks(){
    const tableOfBooks = document.querySelector("table");
    myLibrary.forEach(bookElement => {
        const newRowForBook = document.createElement("tr");
        tableOfBooks.appendChild(newRowForBook);
        const titleCell = document.createElement("td");
        titleCell.innerText = bookElement.title;
        const authorCell = document.createElement("td");
        authorCell.innerText = bookElement.author;
        const pagesCell = document.createElement("td");
        pagesCell.innerText = bookElement.pages;
        const isReadCell = document.createElement("td");
        bookElement.isRead ? isReadCell.innerText = "Yes" : isReadCell.innerText = "No";
        newRowForBook.appendChild(titleCell);
        newRowForBook.appendChild(authorCell);
        newRowForBook.appendChild(pagesCell);
        newRowForBook.appendChild(isReadCell);
    })
}

displayBooks();

const newBookDialog = document.querySelector("dialog");
const showButton = document.querySelector(".new.book.button");
const closeButton = document.querySelector(".cancel.button");
const newBookForm = document.querySelector(".new.book.form");

// show dialog upon clicking "+" button
showButton.addEventListener("click", () => {
    newBookDialog.showModal();
});

// close dialog and clear form upon clicking cancel button
closeButton.addEventListener("click", () => {
    newBookDialog.close();
    newBookForm.reset();
});