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