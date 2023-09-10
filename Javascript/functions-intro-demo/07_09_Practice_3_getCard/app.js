// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

// let suit = ['clubs', 'spades', 'hearts', 'diamonds'];
// // let suit = [`clubs, spades, hearts, diamonds`];

// const randomIndex = Math.floor(Math.random() * value.length);
// const randomItem = value[randomIndex];

// // console.log(`${randomItem}`);
// const randomS = Math.floor(Math.random() * suit.length);
// const randomSuit = suit[randomS];

// // console.log(`${randomSuit}`);
// console.log(`${randomItem} ${randomSuit}`);


function pick(arr) {

    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {

const value = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
return {value: pick(value), suit: pick(suit) };

}