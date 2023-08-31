// FUNCTION SCOPE
// ====================
let totalEggs =0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

let bird = 'Scarlet Macaw';
function birdWatch(){
    let bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch();
console.log(bird);

// =============
// BLOCK SCOPE
// =============
let radius = 8;
if (radius > 0){
    const PI = 3.14159;
    let msg = 'Hiii!!!'
}
console.log(radius); this will give error.
console.log(radius); This will print 8

for(let index =0; index< 5; index ++){
    let msg = 'thieneils';
    console.log(msg);
}
console.log(msg)
console.log(index)

// ===================
// LEXICAL SCOPE
// ===================
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        function inner() {
            for(let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}!!`)
            }
        }
        inner();
    }
    cryForHelp();
}

// ===============================
// FUNCTION EXPRESSIONS
// ===============================
function add(a,b) {
    return a + b;
}

const add = function (a,b) {
    return a + b;
}

let square = function (a) {
    return a * a;
}

// ============================
// HIGHER ORDER FUNCIONS
// ============================
let greet = function() {console.log('HI!')}

function callTwice(func){
    func();
    func();
}
function callTenTimes(f) {
    for(let i = 0; i < 10; i++) {
        f()
    }
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)

// ============================
// RETURNING FUNCTIONS
// ============================
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5) {
        return function() {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    }else {
        return function() {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

function makeBetweenFunc(min, max){
    return function(n){
        return n >= min && n<=max;
    }
}
const testRange = function (n) {
return n >= 100 && n <= 200;
}
makeBetweenFunc(50, 100)

function isBetween(n){
    return n >=50 && n <=100
}
function isBetween2(n){
    return n >=1 && n <=10
}
function isBetween3(n){
    return n >=10 && n <=49
}

// ===========================
// METHODS 
// ===========================
const myMath = {
    PI : 3.14159,
    cube(n) {
        return n **3;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
    square : function(x) {
        return x * x;
    }
};

const square = {
     area(side) {
        return side * side;
     }, 
     perimeter(side) {
        return 4 * side;
     }
 };
 console.log(square);

//  +++++++++++++++++++++++++++++++
//  Keyword "THIS" IN METHODS
//  +++++++++++++++++++++++++++++++
 const person = {
    first: 'Steve',
    last: 'Hall',
    fullName() {
        console.log("NICE NAME!");
        return `${this.first} ${this.last}`
    }
 }

 const cat = {
    name: 'dhano',
    color: 'brown',
    breed: 'bhuri',
    meow() {
        console.log(`${this.name} says meowww`);
    }
 }
 const meow2 = cat.meow;
 function scream() {
    console.log("OOOHHHH MY GOOOODDDDD!!!!")
 }

 const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
    //  this.eggCount++; //2
     console.log('hi')
    //  return 'this is returning from layAnEgg function';
     console.log(this.eggCount); //2
    },
    displayEggCount(){
        this.eggCount++; //1
        // console.log(this.layAnEgg() + " calling from displayEggCount function");
        return (this.layAnEgg());
    }
};

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
     this.eggCount++;
     return 'EGG';
    }
};
// ====================
// TRY/CATCH FUNCTION 
// ====================
try {
    hellow.toUpperCase();
} catch {
    console.log("ERROR!!!!!");
}
// hello.toUppercase();

console.log("AFTER!!");

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!!");
    }
};








