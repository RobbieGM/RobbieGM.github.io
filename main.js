const programmingSince = new Date('2014-01-12T13:57:04.000Z');
const yearsProgramming = new Date(new Date().getTime() - programmingSince).getFullYear() - 1970;
document.getElementById('years-experience').innerText = yearsProgramming;
