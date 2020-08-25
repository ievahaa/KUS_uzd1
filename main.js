// izdrukā konsolē: console.log("kautkas");
const vielasPoga = document.getElementById("vielas-poga");
const aprikojumsPoga = document.getElementById("aprikojums-poga");
const aprikojumsRindas = document.getElementsByClassName("aprikojums");
const vielaRindas = document.getElementsByClassName("viela");

vielasPoga.addEventListener("click", function() {
   vielasPoga.classList.toggle("selected");
   for (let i = 0; i < aprikojumsRindas.length; i++) {
    aprikojumsRindas[i].classList.toggle("slepts");
   
} 
});

aprikojumsPoga.addEventListener("click", function() {
    aprikojumsPoga.classList.toggle("selected");
    for (let i = 0; i < vielaRindas.length; i++) {
     vielaRindas[i].classList.toggle("slepts");
    
 } 
 });

/*function klikskis() {
    alert("Piespiest vielas pogu");
}

vielasPoga.addEventListener("click", klikskis) - tas pats, kas 4-6 rinda
alert("Piespiest vielas pogu"); - izmet paziņojumu
toggle - mainīt darbībasno vienas uz otru */
