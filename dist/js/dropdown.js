const dropdowns = document.querySelectorAll(".dropdowns__title");

dropdowns.forEach((dropdown)=>{
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("open");
        dropdown.nextElementSibling.classList.toggle("open");
       
    });
});