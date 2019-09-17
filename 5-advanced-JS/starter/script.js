/*
/!*
/!*
/!*
/!*
/!*let john={
    name:'John',
    yearOfBirth:1990,
    job: 'teacher'
};*!/
let Person = function (name, yaerOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yaerOfBirth;
    this.job = job;

};
let Question=function (question,
Person.prototype.fullName =
    function () {
        console.log(this.name + ' ' + this.lastName );
    };
Person.prototype.calculateAge =
    function () {
        console.log(2016 - this.yearOfBirth);
    };
Person.prototype.lastName = 'Smith';

let john = new Person('John', 1990, 'teacher');
john.calculateAge();
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1949, 'retired');
jane.calculateAge();
mark.calculateAge();
console.log(jane.lastName);
console.log(john.lastName);
console.log(mark.lastName);
john.fullName();
jane.fullName();
*!/
let obj1={
    name:'name',
    age:26
};
let obj2=obj1;
obj1.age=30;
console.log(obj1.age);
console.log(obj2.age);

let age=27;
let obj= {
    name: 'jonas',
    city: 'Lisbon'
};
function change(a,b) {
    a=30;
    b.city='San Francisco';
}
change(age,obj);
console.log(age);
console.log(obj.city);


*!/
////////////////
function interviewQuestion(job) {
    if (job==='designer'){
        return function (name) {
          console.log(name + ', can you please explain what UX design is ?');
        }
        
    }
    else if(job==='teacher'){
        return function (name) {
            console.log('What subject do you teach, '  + name + '?');
        }
    }
    else {
        return function (name) {
            console.log('Hello' + name + 'What do you do ?');
        }
    }
}
let teacherQuestion=interviewQuestion('teacher');
let designerQuestion=interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Helen');

///////////////
function helloArr(arr,index) {
        if(arr[index]%2===0){
            return function (name) {
                console.log(name + 'work')
            }
        }
        else {
            return function (name) {
                console.log(name + 'does not works!');
            }
        }
}
let array=[2,3,4,5,1,3,2,6];
let calcArray=helloArr(array,3);
calcArray('Igor');


function MathArr(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){

            console.log(arr[i] + ' work')

        }
        else {
            console.log(arr[i] + ' does not works!');
        }
    }
}
calcArray=MathArr(array);
function Marks(mark) {
    if(mark>=60 && mark<75){
        return function (name) {
            console.log(name + ' Your mark is C');
        }
    }
    else if(mark >=75 && mark <= 95){
        return function () {
            mark=100;
            console.log(mark + ' Your mark is S');
        }
    }
}
let lowMark=Marks(65);
lowMark('Zhenya');
let MediumMark=Marks(80);
MediumMark();
*!/

function game() {
    let score=Math.random()*10;
    console.log(score >=5 )
}

(function () {
        let score=Math.random()*10;
        console.log(score >=5 )
}
)();
//console.log(score);
(function (goodluck) {
        let score=Math.random()*10;
        console.log(score >=5 - goodluck );
    }
)(5);*!/
function retirment(retirmentAge) {
    let a=' Years left until retirment';
    return function (yearOfBirth) {
        let age=2016-yearOfBirth;
        console.log((retirmentAge - age) + a);

    }
}
let retirmnetUS=retirment(66);
retirmnetUS(1990);
retirment(66)(1950);

/!*function interviewQuestion(job) {
    if (job==='designer'){
        return function (name) {
            console.log(name + ', can you please explain what UX design is ?');
        }

    }
    else if(job==='teacher'){
        return function (name) {
            console.log('What subject do you teach, '  + name + '?');
        }
    }
    else {
        return function (name) {
            console.log('Hello' + name + 'What do you do ?');
        }
    }
}
let teacherQuestion=interviewQuestion('teacher');
let designerQuestion=interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Helen');*!/

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is ?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {

            console.log('Hello' + name + 'What do you do ?');
        }
    }
}
let designerQuestion=interviewQuestion('designer');
designerQuestion('James');*/

///////
/*
let john={
    name:'John',
    age:26,
    job:'teacher',
    presentation(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ' Ladies and gentlemen! I\'m ' + this.name
            + ' I\'m a ' + this.job  + ' I\'m a ' + this.age + ' years old. ');
        }
        else if( style==='friendly'){
console.log('Hey! What\'s up? I\'m ' + this.name +
     'I\'m a' + this.job  + ' I\'m a ' + this.age + ' years old. Have a nice '  + timeOfDay + '.');
        }
    }
};
let emily={
    name:'Emily',
    age:35,
    job:'designer',
};
john.presentation('formal','morning');
john.presentation.call(emily,'friendly','afternoon');
/!*
john.presentation.apply(emily,['friendly','morning']);*!/
let johnFriendly=john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('night');
let emilyFormal=john.presentation.bind(emily,'formal');
emilyFormal('afternoon');
*/

/////////////
(()=>{
    let Question=function (question,arr,correct){
        this.question=question;
        this.arr=arr;
        this.correct=correct;
    };
    Question.prototype.showQuestion=
        function(){
            console.log(this.question);
            for(let i=0;i<this.arr.length;i++){
                console.log(i + ' ' + this.arr[i]);
            }
        };
    Question.prototype.checkAnswer=
        function(ans,callback){
        let sc;
        if(ans === this.correct){
                console.log('Correct answer!');
             sc=callback(true);
           this.showResult(sc);
             }
            else{
                console.log('Incorrect answer!');
                sc=callback(false);
            this.showResult(sc);
            }
        };
Question.prototype.showResult=
    function(score){
  console.log('///////////////'+'Your score is : ' + score + '/////////////////////////');
console.log('----------------------------------------------------');
    };
    let firstQuestion=new Question('Who is the best programmer in Khnure ?',['Lesha','Ira','Sasha'],0);
    let secondQuestion=new Question('This is Gabella ? ',['Yes','No'],0);
    let thirdQuestion=new Question('Am i Pypsya ?',['Yes','No'],0);

    let questionArray=[firstQuestion,secondQuestion,thirdQuestion];
function score() {
    let sc=0;
    return function (correct) {
        if(correct){
            sc++;
        }
        return sc;
    }
}
let keepScore=score();

    function releaseQuestion(arr) {

        let length=arr.length-1;
        let rand=Math.round(Math.random()*length);

        arr[rand].showQuestion();

        let promt=prompt('Choose variant');
      if(promt !== 'exit'){

          arr[rand].checkAnswer(parseInt(promt),keepScore);

          releaseQuestion(arr);
      }

        }
    releaseQuestion(questionArray);


})();


