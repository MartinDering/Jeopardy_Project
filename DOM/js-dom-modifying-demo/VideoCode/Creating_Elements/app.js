// Make a new empty LI
const newToDo = document.createElement('li');
// Make a new empty B element
const boldText = document.createElement('b');
const ul = document.querySelector('ul');
boldText.textContent = 'Dont be a fool to the damned!';
newToDo.classList = 'todo';
//Add some text to the new B element:
newToDo.append(boldText);
ul.append(newToDo);
//Add a class to
const secondToDo = document.createElement('li');
secondToDo.textContent = 'Order more shit!';
secondToDo.className = 'todo';

ul.append(newToDo, secondToDo);
//Add the B element as a child of the LI
const thirdToDo = document.createElement('li');
thirdToDo.textContent = 'ADDING MORE THIGNS!';
thirdToDo.className = 'todo';

ul.prepend(thirdToDo);
//Create a second LI


// Select the UL we want to append to

//Append both new LIs at once!


//Prepending a new LI to the UL


// Making a new image
 //adding a class (to resize the img)
// Setting the img src
const newImg = document.createElement('img');
newImg.classList.add('thumbnail');
newImg.setAttribute('src', 'https://i.ebayimg.com/images/g/CmUAAOSw4slibENX/s-l1600.jpg')

document.body.prepend(newImg)


// Using removeChild, you need to select the parent in order to remove an element
// const removeMe = document.querySelector('#remove-me');
// ul.removeChild(removeMe)
const removeMe = document.querySelector('#remove-me');

removeMe.remove()
// ul.removeChild(removeMe);


// Using remove() is easier, though it's not supported in IE.


