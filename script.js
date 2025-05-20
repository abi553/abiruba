// var a = 10;
// var b = 15;
// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a != b)
// console.log(a % b)
// console.log(a <= b)
// console.log(a >= b)
// console.log(b == a)
// console.log(b * a)


// function mulit(a, b) {
//     console.log("a*b", a * b)
// }
// mulit(50, 45)
// mulit(30, 46)
// mulit(24, 67)
// var a = 5;
// var b = '5';
// console.log(a !== b)



// var a = 29;
// var b = 30;
// console.log(`${a} +${b}=${a + b}`)
// n = 40
// if (n % 2 == 0) {
//     console.log('even')
// }
// else {
//     console.log('odd')

// }
// n = 1;
// do {
//     if (n % 2 == 0) {
//         console.log(`${n} is Even`)
//     }
//     else {
//         console.log(`${n}is Odd`)
//     }
//     n++;
// } while (n <= 10);

// n = 8
// switch (n) {
//     case 1:
//         console.log("sunday")
//         break;
//     case 2:
//         console.log("monday")
//         break;
//     case 3:
//         console.log("tuesday")
//         break;
//     case 4:
//         console.log("wednesday")
//         break;
//     case 5:
//         console.log("thrusday")
//         break;
//     case 6:
//         console.log("friday")
//         break;
//     case 7:
//         console.log("saturday")
//         break;
//     default:
//         console.log("enter the valid number")

// }
// const sum = () => {
//     console.log(10 + 20)
// }
// sum()


// var element = document.createElement("div")
// // element.setAttribute("class", "main")
// // element.innerText = "This is element from"

// // document.body.append(element);

// // var div = document.create


// // n = 10
// // var result = (n % 2 === 0) ? "even" : "odd"
// // console.log(result)

// // n = 10;
// // sum = 0;
// // if (n % 2 == 0) {
// //     console.log(`${n} is Even`)
// //     sum = sum + n;
// // }
// // console.log("sum:", sum)

// var arr = [10, 20, 30, 40, 50, 60]

// for (var index in arr) {
//     console.log(index)
// }

// for (var key of arr) {
//     console.log(key)
// }
// var obj = { name: "abi", dept: "computer science" }
// for (var key in obj) {
//     console.log(key)
//     console.log(obj[key])
// }

//spread operator

// var arr = [1, 2, 4, 6, 7]
// var arr2 = [...arr, 6, 7, 8]
// console.log(arr2)

// var marks = [90, 89, 98, 78, 87, "fail"]

// var [m1, m2, m3, m4, m5, m6] = marks;
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);
// console.log(m6);

// //callback function
function sayhello() {
    console.log("hello")
}
function demo(name, callback) {
    console.log("hi " + name)
    callback()
}
demo("dhivi", sayhello);

const btn = document.getElementById("btn1");
btn.onclick = function () {
    window.open("https://www.instagram.com/")
    alert("welcome to Instagram")
}


