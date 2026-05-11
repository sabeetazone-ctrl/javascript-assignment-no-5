// --- CHAPTERS 17-20: ARRAYS AND LOOP ---

// 1. Declare and initialize an empty multidimensional array 
var multiArr = [[], []];

// 2. Multidimensional array representing a matrix 
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// 3. Print numeric counting from 1 to 10 
console.log("Numeric Counting:");
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Multiplication table with user-defined number and length 
var tableNum = +prompt("Enter a number to show its multiplication table:");
var tableLen = +prompt("Enter length of multiplication table:");

var tableDiv = document.getElementById('multiplication-table');
tableDiv.innerHTML = `<h3>Multiplication table of ${tableNum} (Length ${tableLen})</h3>`;

for (var j = 1; j <= tableLen; j++) {
    tableDiv.innerHTML += `<p>${tableNum} × ${j} = ${tableNum * j}</p>`;
}

// 6. Generate Counting Sequences 
var seqDiv = document.getElementById('counting-sequences');

// a. Counting (1 to 15)
var counting = [];
for (var k = 1; k <= 15; k++) counting.push(k);
seqDiv.innerHTML += `<h3>Counting:</h3><p>${counting.join(", ")}</p>`;

// b. Reverse counting (10 to 1)
var reverse = [];
for (var l = 10; l >= 1; l--) reverse.push(l);
seqDiv.innerHTML += `<h3>Reverse counting:</h3><p>${reverse.join(", ")}</p>`;

// c. Even (0 to 20)
var even = [];
for (var m = 0; m <= 20; m += 2) even.push(m);
seqDiv.innerHTML += `<h3>Even:</h3><p>${even.join(", ")}</p>`;

// d. Odd (1 to 19)
var odd = [];
for (var n = 1; n <= 19; n += 2) odd.push(n);
seqDiv.innerHTML += `<h3>Odd:</h3><p>${odd.join(", ")}</p>`;

// e. Series (2k to 20k)
var series = [];
for (var o = 2; o <= 20; o += 2) series.push(o + "k");
seqDiv.innerHTML += `<h3>Series:</h3><p>${series.join(", ")}</p>`;

// 7. Search by user input in array 
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order, sir/ma'am?").toLowerCase();
var found = false;
var index = -1;

for (var p = 0; p < A.length; p++) {
    if (A[p] === userInput) {
        found = true;
        index = p;
        break;
    }
}

if (found) {
    alert(`${userInput} is available at index ${index} in our bakery`);
} else {
    alert(`We are sorry. ${userInput} is not available in our bakery`);
}

// 8. Find the largest number in an array
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];
for (var q = 1; q < numbers.length; q++) {
    if (numbers[q] > largest) {
        largest = numbers[q];
    }
}
console.log("Array items: " + numbers);
console.log("The largest number is " + largest);
