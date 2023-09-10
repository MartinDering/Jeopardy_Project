const container = document.getElementsByTagName('section');

const section = document.querySelector('section');

const second = document.getElementsByClassName('second');

const third = document.querySelector('ol third');


let container2 = document.querySelector('.container');

const footer2 = document.querySelector('.footer');
footer2.classList.add('main');

footer2.classList.remove('main');

const addli = document.createElement('li');

addli.innterText = 'four';

let newlist = document.querySelectorAll('ul');
newlist.appendChild(addli);

const uli = document.querySelector('ol li');

for (let i = 0; i < uli.length; i++) {
    uli[i].style.backgroundColor = "green";
    
}


const footer = document.querySelector('.footer')
footer.remove();