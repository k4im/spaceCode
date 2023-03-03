'use strict';
/*Variaveis*/
const boxes = document.querySelector(".container__boxes");
const textProjects = document.querySelector(".text__projetos");
const sectionProcess = document.querySelector(".section__processo");
const containerForm = document.getElementById("container__form");
const sectionSobre = document.querySelector(".sobre__text-box");
const footer = document.querySelector(".footer__container");

/*Adição de classe nas variaveis*/
boxes.classList.add("load--item");
textProjects.classList.add("load--item");
sectionProcess.classList.add("load--item");
containerForm.classList.add("load--item");
sectionSobre.classList.add("load--item");
footer.classList.add("load--item");

/*Definição da função de remoção de classe*/
function visibleClass (entries, observer) {
    const [entry] = entries;
    if(entry.isIntersecting) entry.target.classList.remove("load--item");

};
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

/*Oberservando*/
obsBoxes.observe(boxes);
obsTextProjeto.observe(textProjects);
sectionObs.observe(sectionProcess);
containerObs.observe(containerForm);
sobreObs.observe(sectionSobre);
footerObs.observe(footer);


// ================= final de observadores

