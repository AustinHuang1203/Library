


let myLibrary = [];

function book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(title,author,pages,read){
    let book1 = new book(title,author,pages,read);
    myLibrary.push(book1);
    console.log(myLibrary);
}

const submit1 = document.getElementById("submit");
submit1.addEventListener("click",addb);

function addb(){
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");
    return addBookToLibrary(title.value,author.value,pages.value,read.value);
}


// opens the form and closes it
const openf = document.getElementById("openf");
openf.addEventListener("click", openform);

function openform (){
    document.getElementById("form1").style.visibility = "visible";
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('openf');
    const box1 = document.getElementById("form1");
  
    if (!box.contains(event.target) && !box1.contains(event.target)) {
        document.getElementById("form1").style.visibility = "hidden";
    }
  });
  