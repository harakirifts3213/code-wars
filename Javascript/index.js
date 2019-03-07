const me = {
    name: 'Michael',
    age: 20,
    height: `5'8`,
    weight: 200,
    birthday: `5/12/1998`,
    email: 'obey3213@outlook.com',
    address:{
        street: `1914 Lakewood Drive`,
        city: 'Holladay',
        state: 'Utah',
    },
myFavoriteFoods: [`Pizza`, `Steak`, `Tacos`, `Tika Masala`],
myFamily: [
    {
        name: `Emily`,
        age: 21,
        height: `5'4"`,
    },
    {
        name: `Isaac`,
        age: 16,
        height: `5'7"`,
    },
],
};

// what Josh wrote

// // Nouns adjective and verbs.

// ///Basic Data Types
// 'abc' "abc" `abc` ///strings
// 10 //numbers
//     /// ====> Int, Float 
// true false //booleans

// null undefined /// Valueless 

// NaN /// Not A Number. 

// {} //Object nouns
// [] //arrays lists 

// Josh
const josh = {
  height: `5'11`,
  weight: '180',
  eyeColor: 'blue',
  age: 26,
  birthday:'11/05/1992',
  email:'veryjoshua@gmail.com',
  isMale: true,
  isFemale: false,
  livesInUSA: true,
  address:{
      street: '6020 roseate spoonbill Drive',
      city: 'Windermere',
        state: 'Florida',
        ZipCode: '34786'
  },
  myFavoriteFoods:[`Pizza`, `Steak`, `Tamales`, `pozole`],
  myFamilyMembers:[
      {
          name:'Lauren',
          age: 22,
          relationship:'Spouse'
      },
      {
        name:'Eli',
        age: 1,
        relationship:'Child'
    },
  ],
  addPostive: function(num1, num2) {
        if(num1 > num2){
            return num1 - num2;
        }else{
            return num2 - num1
        }
    }, 
}

// > greater than
// < less than
// === equal to 
// !== not equal to
// && both condition have to be true
// || either or have to be true. 





console.log(josh.addPostive(1,2))
// const name = 'josh';
// const isTrue = false;
// const age = 26
// const arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// const dan = {
//     isAmazingProgrammer: true,
// }

// const inSideArr = arr[2]

// console.log(inSideArr[1])

// /// variables 
// var //es5
// let // es6 let me change what it points to. 
// const //es6 constant


const name = 'joshua'

if(name === 'josh'){
    console.log("Hello josh");
}else if(name === 'dan'){
    console.log("Welcome Dan");
}else{
    console.log("We don't know you");
}

switch(name){
    case 'josh' : 
        console.log("Hello josh");
        break;
    case 'Dan' :
        console.log("Welcome Dan");
        break;  
    default: 
        console.log("We don't know you");
        break;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const age = 1;

const ageIsGreaterThanOne = (age) => {
    if(age > 0){
        return true;
    }else{
        return false;
    }
}
const ageIsGreaterThanOne2 = (age) => {
    return age > 0 ? true : false;
}

const age = -1;

//Ternary

const ageIsGreaterThanOne = (age) => {
    if(age > 0){
        return true;
    }else{
        return false;
    }
}

const ageIsGreaterThanOne2 = (age) => {
    return age > 0 ? true : false;
}

console.log(ageIsGreaterThanOne2(-1))