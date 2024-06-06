

// book class
class Book {
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    isInTable = false;
    indexInArray = null;

    info(){
        let infoText = this.title + " by " + this.author + ", " + this.pages + " pages, ";
        if (isRead){
            return infoText + "read.";
        } else {
            return infoText + "not read yet.";
        }
    }

    flipReadBool(){
        this.isRead = !this.isRead;
    }
}

class Library {
    myLibrary=[];

    addBookToLibrary(bookToAdd) {
        this.myLibrary.push(bookToAdd);
        bookToAdd.indexInArray = this.myLibrary.indexOf(bookToAdd);
    }

    displayBooks(){
        const tableOfBooks = document.querySelector(".book.table");
        this.myLibrary.forEach(bookElement => {
            if (bookElement.isInTable == false){
                const newRowForBook = document.createElement("tr");
                tableOfBooks.appendChild(newRowForBook);
                const titleCell = document.createElement("td");
                titleCell.innerText = bookElement.title;
                const authorCell = document.createElement("td");
                authorCell.innerText = bookElement.author;
                const pagesCell = document.createElement("td");
                pagesCell.innerText = bookElement.pages;
                newRowForBook.appendChild(titleCell);
                newRowForBook.appendChild(authorCell);
                newRowForBook.appendChild(pagesCell);
                // add button to switch Read? between no and yes
                const readChangeButton = document.createElement("button");
                bookElement.isRead ? readChangeButton.innerText = "Yes" : readChangeButton.innerText = "No";
                readChangeButton.addEventListener("click", (e) =>{
                    if (readChangeButton.innerText === "Yes"){
                        readChangeButton.innerText = "No";
                    } else {
                        readChangeButton.innerText = "Yes";
                    }
                    bookElement.flipReadBool();
                })
                readChangeButton.classList.add("read-button");
                const cellForChangeButton = document.createElement("td");
                cellForChangeButton.appendChild(readChangeButton);
                newRowForBook.appendChild(cellForChangeButton);
    
                // add button to remove book
                const removeButton = document.createElement("button");
                const tableSection = document.querySelector(".table-with-x-buttons")
                removeButton.innerText = "x";
                removeButton.classList.add("remove");
                removeButton.addEventListener("click", ()=>{this.removeBook(bookElement.indexInArray)});
                tableSection.appendChild(removeButton);
                bookElement.isInTable = true;
            }
        })
    }

    updateIndex(){
        for (let books of this.myLibrary){
            books.indexInArray = this.myLibrary.indexOf(books);
        }
    }

    removeBook(index){Library
        const tableOfBooks = document.querySelector("table");
        const rowsToRemove = tableOfBooks.querySelectorAll("tr");
        tableOfBooks.removeChild(rowsToRemove[index+1]);
        const tableWithXButtons = document.querySelector(".table-with-x-buttons");
        const removeButtons = tableWithXButtons.querySelectorAll("button.remove")
        const removeButtonToRemove = removeButtons[index];
        tableWithXButtons.removeChild(removeButtonToRemove);
        this.myLibrary.splice(index, 1);
        this.updateIndex();
    }
}


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

// submit button will create new book object
newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTitle = newBookForm.querySelector("#title-input").value;
    let newAuthor = newBookForm.querySelector("#author-input").value;
    let newPages = newBookForm.querySelector("#page-input").value;
    let newRead = newBookForm.querySelector("#read-input").value;
    if (newRead.toLowerCase() === "no"){
        newRead = false;
    } else {
        newRead = true;
    }
    const newBook = new Book (newTitle, newAuthor, newPages, newRead);
    library.addBookToLibrary(newBook);
    library.displayBooks();
    newBookDialog.close();
    newBookForm.reset();
})

const library = new Library();
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
library.addBookToLibrary(theHobbit);
const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 208, true);
library.addBookToLibrary(theGreatGatsby);
library.displayBooks();