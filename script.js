// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);
// const first= ()=>{
// 	let greeting ="hi";
// 	const second =()=>{
// 		console.log(greeting);
// 	}
// 	return second;
// }
// const newFunc = first();
// newFunc();
// //currying 
// const multiply =(a,b)=> a*b;
// const curriedMultiply = (a)=>(b)=> a * b;

// //compose
// const compose = (f,g)=>(a)=>f(g(a));
// const sum =(num)=>num + 1;
// const array = [1,2,10,16];
// const double =[];
// const newArray =array.forEach((num)=>{
// 	double.push(num * 2);
// });
// console.log(double);
// //map,filter,reduce
// const mapArray = array.map(num=> num * 2);
// console.log(mapArray);

// const filterArray = array.filter(num=>num>5);
// console.log(filterArray);

// const reduceArray = array.reduce((accumulator,num)=>accumulator+num,
// 0);
// console.log(reduceArray);

// let obj = {
// 	username0:"wesam",
// 	username1:"hamed",
// 	username2:"ghassan"
// };
// Object.keys(obj).forEach((key,index)=>{
// 	console.log(key,obj[key]);
// });
// Object.values(obj).forEach((value)=>{
// 	console.log(value);
// });
// Object.entries(obj).forEach((entry)=>{
// 	console.log(entry);
// })

//for of

// const basket =["apples","grabes","bananas"];
// const detailBasket ={
// 	apples:5,
// 	grabes:7,
// 	bananas:4
// };
// for(let item of basket)
// console.log(item);

// for(let item in detailBasket){
// 	console.log(item);
// }
const flattened =[[1,2],[3,4],[5,6]].reduce((a,b)=>{
	debugger;
	return a.concat(b);
},[]);