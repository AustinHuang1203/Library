


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
submit1.addEventListener("click",generate);
submit1.addEventListener("click",adde);

function addb(){
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");
    return addBookToLibrary(title.value,author.value,pages.value,read.value);
}

function generate(){
    document.getElementById("container1").innerHTML = "";
    for (let i=0;i<myLibrary.length;i++){
        document.getElementById("container1").innerHTML += 
        `<div class="books1">
        <div>
          Book title
        </div>
        <div>
          Book author
        </div>
        <div>
          Book pages
        </div>
        <button type="button" class="read2" id="books${i}">
          Read
        </button>
        </div>`
    }
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
  

// add read buttons
function adde (){
    const read2 = document.getElementsByClassName("read2");
    for (let i = 0; i<read2.length;i++){
        read2[i].addEventListener("click",()=>toggle(i));
    }
}

function toggle(x){
    let toggle1 = document.getElementById(`books${x}`);
    if(toggle1.innerHTML == "Read"){
        toggle1.innerHTML = "Unread"
    }
    else {
        toggle1.innerHTML = "Read"
    }
}


//delete button 
function deladd(){
    const del2 = document.getElementsByClassName("del2");
    for (let i = 0;i<del2.length;i++){
        del2[i].addEventListener("click",()=>dele(i));
    }
}

function dele(x){
    myLibrary.splice(x,1);
    generate();
    adde();
}






