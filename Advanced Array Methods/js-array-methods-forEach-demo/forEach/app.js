// const colors = [ 'teal', 'cyan', 'peach', 'purple' ];

// function yell(val, i) {
// 	const caps = val.toUpperCase();
// 	console.log(`At index ${i}, ${caps}`);
// }

// colors.forEach(yell);

// const prices = [ 30.99, 19.99, 2.5, 99.0 ];
// let total1 = 0;
// prices.forEach(function(price) {
// 	total1 += price;
// });
// console.log(total1);

// let total2 = 0;
// for (let price of prices) {
// 	total2 += price;
// }
// console.log(total2);

// // Our own version of forEach:
// function forEach(arr, callback) {
// 	for (let i = 0; i < arr.length; i++) {
// 		callback(arr[i], i, arr);
// 	}
// }

// forEach(colors, function(color, i) {
// 	console.log(color.toUpperCase(), 'at index of:', i);
// });

// colors.forEach(function(color, i) {
// 	console.log(color.toUpperCase(), 'at index of:', i);
// });



function holler() {
	console.log('HEY YOU!');
}

const whisper = function(){
	console.log('I HAVE A SECRET');
}

function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}
function mult(x, y) {
	return x * y;
}
function div(x, y) {
	return x / y;
}



// setTimeout(whisper, 2000)
const mathFunc = [add, subtract, mult, div]

function doMath(a,b,mathFunc) {
	return mathFunc(a,b)
	
}

doMath(3,5, function(a,b) {
	console.log(a ** b);
});

function doAllMath(a, b, mathFunc){	``
	for(let func of mathFunc){
		console.log(func(a, b));
	}
}




const colors = ['teal', 'cyan', 'peach', 'orange', 'purple'];

function holler(val, i) {
	const caps = val.toUpperCase();
	console.log(`At index ${i}, ${caps}`)

}

colors.forEach(holler)

const prices =  [24.00, 22.99, 10.99, 5.99]
let total = 0;
prices.forEach(function(prices) {
	total += prices;
});
console.log(total)

function forEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}
forEach(colors, function(color, i){
	console.log(color.toUpperCase(), 'at index of:', i);
});

colors.forEach(function(color, i){
	console.log(color.toUpperCase(), 'at index of:', i);
});