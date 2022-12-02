 //show/hide nav menu
 const navMenu = document.querySelector(".navbar");
 const openMenuBtn = document.querySelector("#open-menu-btn");
 const closeMenuBtn = document.querySelector("#close-menu-btn");
 
 openMenuBtn.addEventListener("click", () => {
     navMenu.style.display = "flex";
     closeMenuBtn.style.display = "inline-block";
     openMenuBtn.style.display = "none";
 });
 
 const closeNav = (e) => {
     e.preventDefault();
     navMenu.style.display = "none";
     closeMenuBtn.style.display = "none";
     openMenuBtn.style.display = "inline-block";
 }
 
 closeMenuBtn.addEventListener("click", closeNav);