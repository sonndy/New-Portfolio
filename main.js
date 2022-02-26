window.addEventListener("DOMContentLoaded", ()=> {
    // links Container
    let linksContainer = document.querySelector(".mylinks");
    // My buttons
    let dcimButton = document.querySelector(".dcim-button");
    let webDevButton = document.querySelector(".webdev-button");
    let experienceButton = document.querySelector(".experience-button");

    // My sections
    let webDevSection = document.querySelector(".webdev-section");
    let dcimSection = document.querySelector(".DCIM");
    let experienceSection = document.querySelector(".experience");

    webDevButton.classList.add("border");


    linksContainer.addEventListener("click", (e)=> {
        if(e.target.textContent === "Digital Communication"){
            webDevSection.classList.add("hide");
            experienceSection.classList.add("hide");
            experienceSection.classList.remove("show");
            dcimSection.classList.add("show");

            dcimButton.classList.add("border");
            webDevButton.classList.remove("border");
            experienceButton.classList.remove("border");

        } else if(e.target.textContent === "Web Development") {
            webDevSection.classList.remove("hide");
            experienceSection.classList.add("hide");
            dcimSection.classList.remove("show");
            experienceSection.classList.remove("show");

            dcimButton.classList.remove("border");
            webDevButton.classList.add("border");
            experienceButton.classList.remove("border");

        } else if((e.target.textContent === "Experience")){
            webDevSection.classList.add("hide");
            experienceSection.classList.remove("hide");
            experienceSection.classList.add("show");
            dcimSection.classList.add("hide");
            dcimSection.classList.remove("show");

            experienceButton.classList.add("border");
            dcimButton.classList.remove("border");
            webDevButton.classList.remove("border");
        }
    })
    
})