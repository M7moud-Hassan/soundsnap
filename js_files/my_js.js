function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
function ToggleSearchBar(){
    if(document.getElementById("searchBar").style.display!="none"){
        document.getElementById("searchBar").style.display="none";
    }else{
        document.getElementById("searchBar").style.display="inline-block";
    }
}  


var logIn = document.getElementById('logIn');
var signUp = document.getElementById('signUp');

window.onclick = function(event) {
  if (event.target == logIn||event.target==signUp) {
    logIn.style.display = "none";
    signUp.style.display = "none";
  }
}

function openLogIn(event){
  event.preventDefault();
  logIn.style.display='block';
 
}

function openSignUp(event){
  event.preventDefault();
  signUp.style.display='block';
 
}