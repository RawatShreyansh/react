// let sum = 0 , i = 1;
// while(i <= 5){
//     sum += i;
//     i++;
// }
// console.log("Sum : ", sum);

// let countDown = [];
// let i = 5;
// while(i > 0){
//     countDown.push(i);
//     i--;
// }
// console.log("CountDown array : ", countDown);

// let teaCollection = [];
// let userInput = '';

// do{
//     userInput = prompt("Enter you tea (enter stop to end) : ");
//     if(userInput === 'stop'){
//         break;
//     }
//     else{
//         teaCollection.push(userInput);
//     }
// }while(userInput !== 'stop') 

// const teaCollection = ["green tea", "black tea", "chai", "oolong tea"];
// const newTeaCollection = [];
// for (const element of teaCollection) {
//     if (element === 'chai') break;
//     newTeaCollection.push(element);
// }
// console.log(newTeaCollection);

// let citiesArray = ['London', 'New York', 'Paris', 'Berlin'];
// let newCitiesArray = citiesArray.filter(citiesNames => {
//     return citiesNames !== 'Paris';
// });
// console.log(newCitiesArray);

// const numberArray = [1,2,3,4,5];
// const smallnumberArray = [];
// for(const numbers of numberArray){
//     if(numbers === 4)
//         smallnumberArray.push(numbers);
// }
// console.log('Numbers array : ', numberArray);
// console.log('Small number array : ', smallnumberArray);

// const teaCollection = ['chai', 'green tea', 'black tea', 'herbal tea'];
// const preferredTeas = [];

// for(const teas of teaCollection){
//     if(teas === 'herbal tea')
//         preferredTeas.push(teas);
// }
// console.log('Tea Collection array :',teaCollection);
// console.log('Preferred tea : ', preferredTeas);

// const ciitiesPopulation = {
//     'London': 9000000,
//     'NewYork': 8500000,
//     'Paris': 2140000,
//     'Berlin': 3600000
// };
// const largeCities = {};
// for (const city in ciitiesPopulation){
//     if(ciitiesPopulation[city] !== 3600000)
//         largeCities[city] = ciitiesPopulation[city];
// }

// console.log(largeCities);


// teaOrder = orderValue => {
//     return `Making ${orderValue}`
// }
// console.log(teaOrder('black coffee'));

// function orderTea(teaType){
//     function confirmOrder(){
//         return `order confirm for ${teaType}`;
//     }
//     return confirmOrder();
// }

// console.log(orderTea('Herbal tea'));

// const totalCost = (price, quantity) => {
//     return price*quantity;
// }
// console.log(totalCost(10,20));

// function makeTea(teaType) {  
//    return `Making order : ${teaType}`;
// } 

// processTeaOrder = (func,teaType) => func(teaType);

// console.log(processTeaOrder(makeTea,'earl grey'));

// function createTeaMaker(){
//     return (teaType) => {
//         return `Making ${teaType}`
//     }
// }

// teaMaker = createTeaMaker();
// console.log(teaMaker('green tea'));


