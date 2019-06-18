function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
 document.getElementById('mySidenav').style.display = "block";
 var body = document.body;
  body.classList.add("mystyle");
}

function closeNav() {
setTimeout(function () {
document.getElementById("mySidenav").style.width = "0";
 document.getElementById('mySidenav').style.display = "none";
 }, 1000);
 var body = document.body;
  body.classList.remove("mystyle");
}