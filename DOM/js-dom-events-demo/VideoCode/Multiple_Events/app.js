// const removeButtons = document.querySelectorAll('li button');
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// for (let btn of removeButtons) {
// 	btn.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 	});
// }

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const newFriend = document.createElement('li');
// 	const removeBtn = document.createElement('button');
// 	removeBtn.innerText = 'UnFriend';
// 	removeBtn.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 	});
// 	newFriend.innerText = input.value;
// 	newFriend.appendChild(removeBtn);
// 	friendList.appendChild(newFriend);
// 	input.value = '';
// });

// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// friendList.addEventListener('click', function(e) {
// 	if (e.target.tagName === 'BUTTON') {
// 		e.target.parentElement.remove();
// 	}
// 	else if (e.target.tagName === 'LI') {
// 		e.target.classList.add('best-friend');
// 		const heart = document.createElement('span');
// 		heart.innerHTML = '&hearts;';
// 		e.target.prepend(heart);
// 	}
// });

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const newFriend = document.createElement('li');
// 	const removeBtn = document.createElement('button');
// 	removeBtn.innerText = 'UnFriend';

// 	newFriend.innerText = input.value;
// 	newFriend.appendChild(removeBtn);
// 	friendList.appendChild(newFriend);
// 	input.value = '';
// });

const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');


// This is much more common! and better handling.
friendList.addEventListener ('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
	e.target.parentElement.remove();
}
else if (e.target.tagName === 'LI') {
	e.target.classList.add('best-friend')
	const heart = document.createElement('span');
	heart.innerHTML = '&hearts;';
	e.target.prepend(heart);
};
});


form.addEventListener('submit', function(e) {
	e.preventDefault();
	console.log(input.value);
	const newFriend = document.createElement('li');
	const remove = document.createElement('button');
	remove.innerText = 'Remove friend';
	// remove.addEventListener('click', function(e) {
		// 	e.target.parentElement.remove();
		// }); // This would create too many events. New way/ better is event Delegation
		newFriend.innerText = input.value;
		newFriend.appendChild(remove);
		friendList.appendChild(newFriend);
		input.value = '';
	})
	// for (let btn of list) { // Goes over each list in botton
	// 	btn.addEventListener('click', function(e) {
	// 		// if (e.target.addEventListener === 'SUBMIT')
	// 		e.target.parentElement.remove(); // performs/ listens to an event/ click gets tht target and what the parent element of that target is and finaly removes it from the function e.
	// 	})
	// }