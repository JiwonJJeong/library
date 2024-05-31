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
console.log(myLibrary);
console.log(myLibrary[0].info());

function displayBooks(){
    
}