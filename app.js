const addBookButton = document.querySelector('.addbook');
const popup = document.querySelector('.popup-parent');
const closeButton = document.querySelector('.close');
const submitButton = document.getElementById('submit_button');
const error = document.getElementById('error');
const showCase = document.querySelector('.showcase');
let removeBookButton = document.querySelectorAll('.removebutton')

//array to store all the books
const myLibrary = [];

//Constructor to create new objects

function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.render = function(){
        const newDiv = document.createElement('div');
        newDiv.classList.add('book');

        for (const bookproperty of [this.title, this.author, this.pages, this.read, 'Remove']){
            const newpar = document.createElement('p');
            newpar.textContent = bookproperty;
            newDiv.appendChild(newpar);
            //adding the class of removebutton to the remove button/paragraph
            if(bookproperty == 'Remove'){
                newpar.classList.add('removebutton');
            }
            //here it is the read button where we have values of false and true
            if(typeof bookproperty == 'boolean'){
                if(bookproperty){
                    newpar.textContent = 'Read'
                } else{
                    newpar.textContent = 'Not Read'
                    newpar.style.backgroundColor = 'red';
                }
            }
        }

        showCase.appendChild(newDiv);
    }
}


//If the submit button clicked

submitButton.addEventListener('click', function(event){
    event.preventDefault()

    let bookProperties = []

    //Get the values in each input

    const bookTitle = document.getElementById('book_title').value;
    const bookAuthor = document.getElementById('book_author').value;
    const bookPages = document.getElementById('book_pages').value;
    const bookRead = document.getElementById('book_read').checked;

    //checking if the values were provided

    if (bookTitle && bookAuthor && bookPages){
        //calling the constructor to add these new values in the library and pushing it to the library
        const newBook = new book(bookTitle, bookAuthor, bookPages, bookRead)

        myLibrary.push(newBook)
        newBook.render();




        /*
        //adding the values in this array so as to loop over it when displaying for the use
        bookProperties = [bookTitle, bookAuthor, bookPages, bookRead, 'Remove']



        //creating the new book div(card)
        const newDiv = document.createElement('div');
        newDiv.classList.add('book');

        //looping over the entered values in order to
        for (let x in bookProperties){
            const newpar = document.createElement('p');
            newpar.textContent = bookProperties[x];
            newDiv.appendChild(newpar);
            //adding the class of removebutton to the remove button/paragraph
            if(bookProperties[x] == 'Remove'){
                newpar.classList.add('removebutton');
            }
            //here it is the read button where we have values of false and true
            if(typeof bookProperties[x] == 'boolean'){
                if(bookProperties[x]){
                    newpar.textContent = 'Read'
                } else{
                    newpar.textContent = 'Not Read'
                    newpar.style.backgroundColor = 'red';
                }
            }
        }
        //adding the new created div to the showcase of other books
        showCase.appendChild(newDiv);*/
        



        //hiding the popup modal
        popup.style.display = 'none';
        //reseting the values
        document.getElementById('book_title').value = '';
        document.getElementById('book_author').value = '';
        document.getElementById('book_pages').value = '';
        document.getElementById('book_read').checked;
        error.style.display = 'none';
    }
    else{
        //if some of the values arent provided show an error message
        error.style.display = 'block';
    }

});

//removing the book when remove button is clicked
showCase.addEventListener("click", function(event) {
    if (event.target.classList.contains("removebutton")) {
      const card = event.target.parentElement;
      showCase.removeChild(card);
    }
  });

//toogling the read and not read button
  showCase.addEventListener("click", function(event) {
    if (event.target.textContent == 'Read') {
        event.target.style.backgroundColor = 'red';
        event.target.textContent = 'Not Read'
    }
    else if(event.target.textContent == 'Not Read'){
        event.target.style.backgroundColor = 'green';
        event.target.textContent = 'Read'
    }
  });
  


//Opening and Closing the Popup

addBookButton.addEventListener('click', function() {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', function(){
    popup.style.display = 'none';
});