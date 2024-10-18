const navs = document.querySelectorAll(".favCard__nav");
const contents = document.querySelectorAll(".favorites__card--text");
const cards = document.querySelectorAll(".favorites__card");

navs.forEach((nav)=>{
    nav.addEventListener("click",()=>{
        removeActiveTab();
        nav.classList.add("active");
        const activeContent = document.querySelector(`#${nav.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
        
    });
});

function removeActiveTab(){
    navs.forEach((nav)=>{
        nav.classList.remove("active");
    });
 
}

function removeActiveContent(){
    contents.forEach((content)=>{
        content.classList.remove("active");
    })
};


