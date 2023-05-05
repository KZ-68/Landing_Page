var sidenav = document.getElementById("mySidenav"); 
var sideBtn = document.getElementById("sideBtn");

sideBtn.onclick = toggleNav;

// Fonction pour faire apparaitre ou dispraitre la side nav
function toggleNav() {
  sidenav.classList.toggle("active")
  if (sidenav.classList.contains("active")) {
  sidenav.classList.add("active"); /* Set the width of the side navigation to 250px */
  } else {
    sidenav.classList.remove("active"); /* Set the width of the side navigation to 0 */
  }
}


 