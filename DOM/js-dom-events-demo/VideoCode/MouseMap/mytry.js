// const doc = document.querySelector('document');

document.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.pageX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    const color = 'rgb(' + xPos + ', ' + yPos + ', 100)';
    document.body.style.backgroundColor = color;
});