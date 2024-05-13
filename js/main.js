//INIZIALIZZIAMO CONTATORE A 10 SECONDI
let countdown = 10;
console.log(countdown)
//IMPORTIAMO HTML
const countdownElement = document.getElementById('countdown');
 const stopButton = document.getElementById('stopButton')

 //FUNZIONE PER AGGIORNARE IL CONTEGGIO
function updateCountdown(){
    countdown--;
    countdownElement.textContent = countdown;
    //SE CONTATORE A 0 MOSTRA BUON ANNO!
    if(countdown === 0){
        clearInterval(countdownInterval);
        countdownElement.textContent = 'Buon Anno!';
    }
}

//INIZIALIZZIAMO COUNTDOWN

let countdownInterval = setInterval(updateCountdown,1000) //AVVIO

//AGGIUNGIAMO UN EVENT LISTENER AL PULSANTE STOP PER INTERROMPERE

stopButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    countdownElement.textContent = "Buon Anno!"
   
});

