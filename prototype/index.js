const myObj = {}
 const prototypeMyObject = Object.getPrototypeOf(myObj)
 console.log(prototypeMyObject)


//  constructor function 
 function Person(name, age)  {
    this.name = name; 
    this.age = age; 
 }
 const join = new Person("john" , 8979)

 console.log(join)


//  prototype chain


Person.prototype.greet = function ( ){
    console.log(`hello , my name is mul ${this.name}`, )
}

join.greet()


function Student(name, age, school){
    Person.call(this, name, age) ; 
    this.school = school
} 

Student.prototype = Object.create(Person.prototype)
; 
const alive = new Student("Alive"  , 25 , "akfnj")


alive.greet(); 
let arr = ["mukta", "millerrt"]



let object = {
name:" nthean", 
class: "collage" , 
 age: 22, 
  city: "new delhi", 
 getIntro:  function(){
    console.log(this.name + " from " +  this.city)


 }
} 

// javascript attached to the original property to it's this how you access by the prototype


let comedy = ["jokes", "fuuny"]


let object2 = {
    name : "multa"
    , age: 33, 

}
 
Function.prototype.mybind = function()
{
    console.log("Ew3dsad")
}

function fun(){
    
}