function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
function ToggleSearchBar(){
    if(document.getElementById("searchBar").style.display!="none"){
        document.getElementById("searchBar").style.display="none";
        document.getElementById("main").style.top="4.5em";
    }else{
        document.getElementById("searchBar").style.display="inline-block";
        document.getElementById("main").style.top="8em";
    }
}  