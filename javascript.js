//Variaveis Relogio
const horas = document.getElementById('horas_relogio');
const minutos = document.getElementById('minutos_relogio');
const segundos = document.getElementById('segundos_relogio');
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const relogio = setInterval('time()');

//variaveis Cronometro
const milisecondsEl = document.querySelector('#miliseconds');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let = isPaused = false;

//eventos

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click',pauseTimer);
resumeBtn.addEventListener('click',resumeTimer);
resetBtn.addEventListener('click',resetTimer);

//funções

function time(){
        let datetoday = new Date();
    
        let hr = datetoday.getHours();
        let min = datetoday.getMinutes();
        let s = datetoday.getSeconds();
    
        horas.textContent = formaTime(hr);
        minutos.textContent = formaTime(min);
        segundos.textContent =(s);
}
function startTimer() {

    interval = setInterval(()=>{
    
        if(!isPaused){
            miliseconds += 10

            if(miliseconds === 1000){
                seconds++;
                miliseconds = 0
            }
            if(seconds === 60){
                minutes++;
                seconds = 0
            }
            minutesEl.textContent = formaTime(minutes);
            secondsEl.textContent = formaTime(seconds);
            milisecondsEl.textContent = formaTime(miliseconds);
        }
    
    },10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";

}
function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block"
}
function resumeTimer(){
    isPaused = false;
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
}
function resetTimer(){
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  milisecondsEl.textContent = "000";
  startBtn.style.display = "block"
  pauseBtn.style.display = "none"
  resumeBtn.style.display = "none"
}

function formaTime(time){
    return time < 10 ? `0${time}`: time;
}
function formatMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0"):time;
}

