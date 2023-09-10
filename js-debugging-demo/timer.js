function count(num) {
let number = num;

const interval = setInterval(() => {
    console.log(number);
    number--;

    if (number < 0) { 
        console.log('DONE!');
        clearInterval(interval);
        }
                            
    }, 1000);
}
console.log(count(8));

function randomNum() {
let count = 0;
    const interval = setInterval(() => { 

          const random = Math.random();
            count++;

         if (random > 0.75) {
             clearInterval(interval);
             console.log('Number is greater then 0.75');
             console.log('Number of tries: ' + count);

        }



}, 1000);
}
console.log(randomNum());