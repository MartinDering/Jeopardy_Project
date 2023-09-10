function randomRGB(){ //creates a random RGB value
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})` // returns the random RGB value using backtick notation
}
// const h1 = document.querySelector('h1');

// h1.style.color = 'red';
const letters = document.querySelectorAll('.letter'); // selectes the letters that correspond to the letter class from the HTML document

setInterval(function(){ // sets the interval for the random RGB value and selects all the letters in letters from the querySelector

    for (let letter of letters) {
        letter.style.color = randomRGB(); // Makes it what are we changing and what function we grabbed to use to change
    }

}, 300) // Interval for the random RGB value