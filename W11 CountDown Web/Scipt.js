const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const heading = document.querySelector('h1');

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
const newYearTime = new Date(`January 01, ${nextYear} 00:00:00`);

function updateCountDown() {
    const currentTime = new Date();
    let diff = newYearTime - currentTime;

    if (diff < 0) {
        diff = 0;
    }

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    day.textContent = String(d).padStart(2, '0');
    hour.textContent = String(h).padStart(2, '0');
    minute.textContent = String(m).padStart(2, '0');
    second.textContent = String(s).padStart(2, '0');
    heading.textContent = `Happy New Year : ${nextYear}`;
}

updateCountDown();
setInterval(updateCountDown, 1000);