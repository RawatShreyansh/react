//closure functions
// function counterFunction() {
//     let counter = 4;
//     return function () {
//         return ++counter;
//     }
// }

// let increment = counterFunction();

// console.log(increment());

// promises 
// function promisesFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = false;
//             if(success){
//                 resolve("The promise is resolved successfully");
//             } else{
//                 reject("The promis is rejected");
//             }
//         }, 3000);
//     });
// }

// promisesFunction()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

//async await
function dataGiveFunction(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({"name" : "John Doe", age : 30});
        },3000)
    });
}

function userData1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Another user data");
        },3000);
    });
}
async function getData(){
    console.log("Fetching user data");
    try{
        const [userData0, userData2] = await Promise.all([
            dataGiveFunction(),
            userData1(),
        ]);
        console.log(userData0);
        console.log(userData2);
        console.log("data fetched successfully!");
    }catch(error){
        console.error("Error occured while fetching data",error);
        console.log("completed");
    }
}

getData();