document.getElementById('gallery');


const allH3 = document.querySelectorAll('h3');

for (let i = 0; i < allH3.length; i++) {
    allH3[i].style.color = 'crimson';
}

const allH2 = document.getElementsByTagName('h2'); 
    for (let h2 of allH2) {
        h2.style.color = 'teal';
        h2.style.fontSize = '40px';
    }
