/* IMPRIME EL IDNEX EN CONSOLA
console.log(document);*/
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexAge = /^[1-9]\d*$/;
const regexName = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
const mainTitle = document.getElementById("mainTitle");
const nameIpt = document.getElementById("nameIpt");
const formBtn = document.getElementById("formBtn");
const feedbackAlert = document.getElementById("feedbackAlert");
const greeting = document.getElementById("greeting");
const emailIpt = document.getElementById("emailIpt");
const feedbackEmail = document.getElementById("feedbackEmail");
const ageIpt = document.getElementById("ageIpt");
const feedbackAge = document.getElementById("feedbackAge");
const resetBtn = document.getElementById("resetBtn");


formBtn.addEventListener("click", (evento) => {

    evento.preventDefault();

    //CHECAR LA LOGIA PORQUE ESTA MAL
    if ((nameIpt.value.length < 3) || !(regexName.test(nameIpt.value))) {

        feedbackAlert.style.display = "block";
        greeting.innerText = "";

    } else {
        greeting.innerText = `¡Hola, ${nameIpt.value}!`;
        feedbackAlert.style.display = "none";
    }


    if (!regexEmail.test(emailIpt.value)) {

        feedbackEmail.style.display = "block";

    } else {

        feedbackEmail.style.display = "none";
    }

    //Agregar edad

    if (!regexAge.test(ageIpt.value)) {
        feedbackAge.style.display = "block";

    } else {
        feedbackAge.style.display = "none";
    }//else

});//formBtn

resetBtn.addEventListener("click", () => {
    feedbackAlert.style.display = "none";
    feedbackEmail.style.display = "none";
    feedbackAge.style.display = "none";
});

