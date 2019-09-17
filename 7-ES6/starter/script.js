(() => {
    'use strict';

    /*// Strings

    // let firstName = 'John';
    // let lastName = 'Smith';
    // const yearOfBirth = 1990;
    //     function calcAge(year) {
    //         return 2016 - year ;
    //     }
    //     console.log(`This is ${firstName} ${lastName}. He was born in
    //     ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old. `);
    //
    //     const n = `${firstName} ${lastName}`;
    //     console.log(n.startsWith('J'));
    //     console.log(n.endsWith('h'));
    //     console.log(n.includes(' '));
    //     console.log(firstName.repeat(10));
    //

    /!*    const years =[1990, 1965,1982,1937];
        let ages6 = years.map((el)=>2019 - el);
        console.log(ages6);
         ages6 = years.map((el,index) => `Age element ${index + 1} :${2016 - el}.` );
         console.log(ages6);
         ages6 = years.map((el,index)=>{
            const now =new Date().getFullYear();
            const age = now - el;
            return `Age element ${index + 1} :${age}.`;
         });
         console.log(ages6);*!/

    /!*    let box6 = {
            color : 'green',
            position:1,
            clickMe(){
                document.querySelector('.green').addEventListener('click',
                    (()=>{
                    let str = `This is box number ${this.position} and it is ${this.color}`;
                    alert(str);
                }));
            }
        };
        box6.clickMe();*!/

        function Person(name) {
            this.name = name;
        }
        Person.prototype.myFriends6 = function(friends){
            let arr=friends.map(el=>`${this.name} is friends with ${el}`);
    console.log(arr);
        };

    let friends = ['Bob','Mark','Jane'];
    let person = new Person('John');
    person.myFriends6(friends);*/

    /*

        const [name,year] = ['John',26];

        console.log(name);
        console.log(year);

        const obj ={
            firstName : 'JOhn',
            lastName : 'Smith'
        };
        const{firstName,lastName} = obj;
        console.log(firstName);
        console.log(lastName);

        const {firstName : a, lastName : b} = obj;
        console.log(a);
        console.log(b);
    */
/*
    function calcAgeRetirment(year) {
        const age = new Date().getFullYear() - year;
        return {
            age : age,
            retirement: 65 - age
        };
    }
    const {age,retirement}=calcAgeRetirment(2010);

  //  const [age,retirement]=calcAgeRetirment(1990);
    console.log(age);
    console.log(retirement);
    let arr = [1,2,3,4,5,6,7,8,9];
    const [first,second] = arr;
    console.log(first);
    console.log(second);*/

/*const boxes = document.querySelectorAll('.box');
const boxexsArr6 = Array.from(boxes);
boxexsArr6.forEach(el=>el.style.backgroundColor =  'dodgerblue' );


for (const cur of boxexsArr6){
   if (cur.className ==='box blue'){
       continue;
   }
   cur.textContent = 'I changed to blue';
}


    let ages = [12,17,8,21,14,11];
console.log(ages.findIndex(el=>el>18));
console.log(ages.find(el => el >= 18));



function addFourAges (a,b,c,d) {
    return a + b + c + d;
}
 let sum1 = addFourAges(18,30,12,21);
console.log(sum1);

const sum2 =addFourAges(...ages);

const familySmith = ['John', 'Jane','Mark'];
const familyMiller = ['Mary','Bob','Ann'];

const bigFamily = [...familySmith,...familyMiller];



const h =document.querySelector('h1');
 const boxes1 = document.querySelectorAll('.box');

 const all = [h,...boxes1];
 Array.from(all).forEach(el=>el.textContent = 'I changed text');*/

/*
function isFullAge6(limit,...years) {
years.forEach(el=>console.log((2018-el) >= limit )) }
isFullAge6(16,1991,1990,1999,1965);
*/


/*
function calcSum(...numbers) {
    console.log(numbers);
    let result = numbers.map(el=>el + 3);
    console.log(result);
}

calcSum(1,2,3,4,5,6,7,8,9);
*/

function MillerPerson(firsName,lastName = 'Miller',yearOfBirth,nationality= 'American'){
    this.firstName =firsName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality  = nationality;
}
let Alex = new MillerPerson('Alex','Thomas',2000);
console.log(Alex);


const question = new Map();
question.set('question','What is the official name of the latest major Javascript version ?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'Correct answer');
question.set(false,'Wrong, please try again!');
console.log(question);
console.log(question.get('question'));
console.log(question.size);

if ( question.has(4)) {
    question.delete(4);
}

/*question.forEach((value,key)=>{
console.log(`This is ${key} and its set to ${value}`);
});*/
/*
console.log(question.entries());
for ( let [key,value] of question.entries()){
if(typeof(key) === 'number'){
    console.log(`Answer ${key} : ${value} `);
}
}
const ans =parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/
    class Person6 {
        constructor (name,yearOfBirth,job){
            this.name =name;
            this.yearOfBirth = yearOfBirth;
            this.job =job;
        }
        calculateAge(){
            let age =new Date().getFullYear() - this.yearOfBirth;
            console.log(age);
        }

    }

 class Athelete6 extends Person6 {
        constructor(name,yearOfBirth,job,olympicGames,medals){
            super(name,yearOfBirth,job);
            this.olympicGames = olympicGames;
            this.medals =medals;
        }
        wonMedal(){
            this.medals++;
            console.log(this.medals);
        }
 }

 const  johnAthlete6 = new Athelete6('John',1990,'swimmer',3,10);
    johnAthlete6.wonMedal();
    johnAthlete6.calculateAge();

    console.log(johnAthlete6);


})();