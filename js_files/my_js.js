//open and close nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

//toggle search bar  
function ToggleSearchBar(){
    if(document.getElementById("searchBar").style.display!="none"){
        document.getElementById("searchBar").style.display="none";
    }else{
        document.getElementById("searchBar").style.display="inline-block";
    }
}  


//show login and sing up
var logIn = document.getElementById('logIn');
var signUp = document.getElementById('signUp');
var video =document.getElementById('video');

window.onclick = function(event) {
  if (event.target == logIn||event.target==signUp||event.target==video) {
    logIn.style.display = "none";
    signUp.style.display = "none";
    video.style.display = "none";
  }
}

function openLogIn(event){
  event.preventDefault();
  logIn.style.display='block';
 
}
function openVideo(event){
  video.style.display='block';
 
}

function openSignUp(event){
  event.preventDefault();
  signUp.style.display='block';
 
}

//clear text search
var inputSearch =document.getElementById('search');
var claerSpan=document.getElementById('clear');
inputSearch.addEventListener('keypress',function(){
  claerSpan.innerHTML='';
  claerSpan.classList.add('load');
  setTimeout(function(){
    claerSpan.classList.remove('load')
    claerSpan.innerHTML='&times;';
  },1000);
})

function checkClear(){
  if(inputSearch.value==''){
    claerSpan.innerHTML='';
   }
}
function clearInput(){
  inputSearch.value='';
  claerSpan.innerHTML='';
}


//change type search
function ChangeList(ele){
  document.getElementById('typeSearch').innerHTML=ele.innerHTML;
  inputSearch.placeholder='search for '+ele.innerHTML;
  if(ele.innerHTML=='Sound Effects'){
    document.getElementById('dropMenu').style.left='-10%';
  }else{
    document.getElementById('dropMenu').style.left='-80%';
  }
}

function onResize(){
  document.getElementById('searchBar').style.display='none';
  closeNav();
}
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 