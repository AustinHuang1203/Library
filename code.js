


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
submit1.addEventListener("click",validate);
/*
submit1.addEventListener("click",addb);
submit1.addEventListener("click",generate);
submit1.addEventListener("click",adde);
submit1.addEventListener("click",deladd);
*/

function validate(){
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    if (title.checkValidity() && author.checkValidity() && pages.checkValidity()){
        addb();
        generate();
        adde();
        deladd();
        read.value=false;
        document.getElementById("form1").style.visibility = "hidden";
    } else{}
}


function addb(){
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read").checked;
    let read3 = "Read"
    if (read==true){
        read3 = "Read"
    } else {
        read3 = "Unread"
    }
    return addBookToLibrary(title.value,author.value,pages.value,read3);
}

function generate(){
    document.getElementById("container1").innerHTML = "";
    for (let i=0;i<myLibrary.length;i++){
        document.getElementById("container1").innerHTML += 
        `<div class="books1">
        <div>
          ${myLibrary[i].title}
        </div>
        <div>
            ${myLibrary[i].author}
        </div>
        <div>
            ${myLibrary[i].pages}
        </div>
        <button type="button" class="read2" id="books${i}">
            ${myLibrary[i].read}
        </button>
        <button type="button" class="del2" id="bookss${i}">
        Delete
        </button>
        </div>`
    }
}


function dontsubmit(){
    return false;
}

// opens the form and closes it
const openf = document.getElementById("openf");
openf.addEventListener("click", openform);

function openform (){

    title.value="";
    author.value="";
    pages.value="";
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
    let toggle1 = myLibrary[x];
    if(toggle1.read == "Read"){
        toggle1.read = "Unread"
    }
    else {
        toggle1.read = "Read"
    }
    generate();
    adde();
    deladd();
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
    deladd();
}






