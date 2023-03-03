'use strict';
/*Variaveis*/
const boxes = document.querySelector(".container__boxes");
const textProjects = document.querySelector(".text__projetos");
const sectionProcess = document.querySelector(".section__processo");
const containerForm = document.getElementById("container__form");
const sectionSobre = document.querySelector(".sobre__text-box");
const footer = document.querySelector(".footer__container");
const hiddenBtn = document.querySelector(".home-link");
const hamburgerMenu = document.querySelector(".hamburguer-menu");

const homeBtn = document.getElementById("home--btn");
const contatoBtn = document.getElementById("contato--btn");
const sobreBtn = document.getElementById("sobre--btn");

const home = document.getElementById("section--home");
const projetos = document.getElementById("section--projetos");
const contato = document.getElementById("section--contact");
const sobre = document.getElementById("section--sobre");


/*Adição de classe nas variaveis*/
boxes.classList.add("load--item");
textProjects.classList.add("load--item");
sectionProcess.classList.add("load--item");
containerForm.classList.add("load--item");
sectionSobre.classList.add("load--item");
footer.classList.add("load--item");
hiddenBtn.classList.add("load--item");
/*Definição da função de remoção de classe*/
function visibleClass (entries, observer) {
    const [entry] = entries;
    if(entry.isIntersecting) entry.target.classList.remove("load--item");

};
function btnShow(entries) {
    const [entry] = entries
    if(entry.isIntersecting) hiddenBtn.classList.remove("load--item");
    else if (!entry.isIntersecting) hiddenBtn.classList.add("load--item");
}
/*Padrão de 25% de visibilidade para o observador ativar*/
const defaultObsOptions = {
    root: null,
    threshold: .25
}
/*Padrão de 50% de visibilidade para o observador ativar*/
const fiftyObsOpt = {
    root: null,
    threshold: .50
}

/*Definindo observadores*/
const obsBoxes = new IntersectionObserver(visibleClass, defaultObsOptions);
const obsTextProjeto = new IntersectionObserver(visibleClass, defaultObsOptions);
const sectionObs = new IntersectionObserver(visibleClass, fiftyObsOpt);
const containerObs = new IntersectionObserver(visibleClass, defaultObsOptions)
const sobreObs = new IntersectionObserver(visibleClass, fiftyObsOpt);
const footerObs = new IntersectionObserver(visibleClass, defaultObsOptions);
const obsBtn = new IntersectionObserver(btnShow, {
    root: null,
    threshold: .1
})

/*Oberservando*/
obsBoxes.observe(boxes);
obsTextProjeto.observe(textProjects);
sectionObs.observe(sectionProcess);
containerObs.observe(containerForm);
sobreObs.observe(sectionSobre);
footerObs.observe(footer);
obsBtn.observe(footer);

// ================= final de observadores
function scrollToSection(element) {    
    window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop
    })
};
homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(home);
});

contatoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(contato);
});

sobreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(sobre);
});

hiddenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(home);
})