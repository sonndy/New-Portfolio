window.addEventListener("DOMContentLoaded", ()=> {
    // links Container
    let linksContainer = document.querySelector(".mylinks");
    // My buttons
    let dcimButton = document.querySelector(".dcim-button");
    let webDevButton = document.querySelector(".webdev-button");
    let experienceButton = document.querySelector(".experience-button");
    let aboutMe = document.querySelector(".about-button");

    // menu button
    let burgerMenu = document.querySelector(".burger-icon");


    // My sections
    let webDevSection = document.querySelector(".webdev-section");
    let dcimSection = document.querySelector(".DCIM");
    let experienceSection = document.querySelector(".experience");
    let aboutMeSection = document.querySelector(".about-page");


    webDevButton.classList.add("border");


    linksContainer.addEventListener("click", (e)=> {
        if(e.target.textContent === "Digital Communication"){
            webDevSection.classList.add("hide");
            experienceSection.classList.add("hide");
            aboutMeSection.classList.add("hide");
            aboutMeSection.classList.remove("show");
            experienceSection.classList.remove("show");
            dcimSection.classList.add("show");

            dcimButton.classList.add("border");
            webDevButton.classList.remove("border");
            experienceButton.classList.remove("border");
            aboutMe.classList.remove("border");

        } else if(e.target.textContent === "Web Development") {
            webDevSection.classList.remove("hide");
            experienceSection.classList.add("hide");
            dcimSection.classList.remove("show");
            experienceSection.classList.remove("show");
            aboutMeSection.classList.remove("show");
            aboutMeSection.classList.add("hide");

            dcimButton.classList.remove("border");
            webDevButton.classList.add("border");
            experienceButton.classList.remove("border");
            aboutMe.classList.remove("border");

        } else if((e.target.textContent === "Experience")){
            webDevSection.classList.add("hide");
            experienceSection.classList.remove("hide");
            experienceSection.classList.add("show");
            dcimSection.classList.add("hide");
            dcimSection.classList.remove("show");
            aboutMeSection.classList.add("hide");
            aboutMeSection.classList.remove("show");

            experienceButton.classList.add("border");
            dcimButton.classList.remove("border");
            webDevButton.classList.remove("border");
            aboutMe.classList.remove("border");
        } else if((e.target.textContent === "About me")){
            webDevSection.classList.add("hide");
            experienceSection.classList.add("hide");
            experienceSection.classList.remove("show");
            dcimSection.classList.add("hide");
            dcimSection.classList.remove("show");
            aboutMeSection.classList.add("show");
            aboutMeSection.classList.remove("hide");

            experienceButton.classList.remove("border");
            dcimButton.classList.remove("border");
            webDevButton.classList.remove("border");
            aboutMe.classList.add("border");
    }
})

        burgerMenu.addEventListener("click", ()=> {
            linksContainer.classList.toggle("flex");
        })
    
})