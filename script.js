// script.js
let hr = document.querySelector('.hour');
let min = document.querySelector('.minute');
let sec = document.querySelector('.second');

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

let time = [0, 0, 0];
let timer;
let disabled = false;

function updateDisplay() {
    hr.innerText = time[0].toString().padStart(2, "0") + ":";
    min.innerText = time[1].toString().padStart(2, "0") + ":";
    sec.innerText = time[2].toString().padStart(2, "0");
}

btn1.addEventListener('click', () => {
    if (!disabled) {
        btn1.classList.add('disabled');
        btn2.classList.remove('disabled');
        disabled = true;
        
        timer = setInterval(() => {
            time[2]++;
            if (time[2] === 60) {
                time[2] = 0;
                time[1]++;
                if (time[1] === 60) {
                    time[1] = 0;
                    time[2] = 0;
                    time[0]++;
                }
            }
            updateDisplay();
        }, 1000);
    }
});

btn2.addEventListener('click', () => {
    if (disabled) {
        btn2.classList.add('disabled');
        btn1.classList.remove('disabled');
        clearInterval(timer);
        disabled = false;
    }
});

btn3.addEventListener('click', () => {
    clearInterval(timer);
    btn1.classList.remove('disabled');
    btn2.classList.remove('disabled');
    time = [0, 0, 0];
    disabled = false;
    updateDisplay();
});

// Initial display setup
updateDisplay();