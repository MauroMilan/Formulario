/* IMPRIME EL IDNEX EN CONSOLA
console.log(document);*/

const mainTitle = document.getElementById("mainTitle");
const nameIpt = document.getElementById("nameIpt");
const formBtn = document.getElementById("formBtn");
const feedbackAlert = document.getElementById("feedbackAlert");
const greeting= document.getElementById("greeting");



formBtn.addEventListener("click", ( evento ) => {

    evento.preventDefault();

    if( nameIpt.value.length === 0 ){

        feedbackAlert.style.display = "block";

        greeting.innerText = "";

    } else {

        greeting.innerText = `¡Hola, ${nameIpt.value}!`;

        feedbackAlert.style.display = "none";
        

    }

});