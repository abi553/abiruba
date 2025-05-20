var a = 10;
var b = 15;
console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a != b)
console.log(a % b)
console.log(a <= b)
console.log(a >= b)
console.log(b == a)
console.log(b * a)


function mulit(a, b) {
    console.log("a*b", a * b)
}
mulit(50, 45)
mulit(30, 46)
mulit(24, 67)
var a = 5;
var b = '5';
console.log(a !== b)



var a = 29;
var b = 30;
console.log(`${a} +${b}=${a + b}`)
n = 40
if (n % 2 == 0) {
    console.log('even')
}
else {
    console.log('odd')

}
n = 1;
do {
    if (n % 2 == 0) {
        console.log(`${n} is Even`)
    }
    else {
        console.log(`${n}is Odd`)
    }
    n++;
} while (n <= 10);

n = 8
switch (n) {
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thrusday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;
    default:
        console.log("enter the valid number")

}
const sum = () => {
    console.log(10 + 20)
}
sum()


var element = document.createElement("div")
element.setAttribute("class", "main")
element.innerText = "This is element from"

document.body.append(element);

var div = document.create


n = 10
var result = (n % 2 === 0) ? "even" : "odd"
console.log(result)

n = 10;
sum = 0;
if (n % 2 == 0) {
    console.log(`${n} is Even`)
    sum = sum + n;
}
console.log("sum:", sum)