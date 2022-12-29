function Employee(prenom, nom, salaire=1500){
    Person.call(this, prenom, nom);
    this.salaire = salaire
};

function Client(prenom, nom, id){
    Person.call(this, prenom, nom)
    this.id = id
}

function Person(prenom, nom){
    this.prenom = prenom,
    this.nom = nom 

};
Person.prototype.sayHello = function(){
    return ` ${this.prenom} Vous dis Bonjour !!`
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Employee, Person);
extend(Client, Person);

// Employee.prototype = new Person();
// Employee.prototype.constructor = Employee;
// Client.prototype = new Person();
// Employee.prototype.sayHello = function(){
//     return `Bonjours de la part ${this.prenom} !`
// };

// Object.defineProperty(Employee.prototype, 'sayHello', {
//     enumerable : false,
//     configurable : false
// })

let employeTheCoon = new Employee("The Coon", "le Rad", "France");
let employeCitron = new Employee("Citron", 'LeLache', 'Espagne');



console.log(employeCitron.sayHello())
console.log(employeCitron)
// console.log(employeTheCoon.sayHello())

// for(prop in employeCitron) {
//     console.log(prop)
// };
// console.log(employeCitron.hasOwnProperty('nom'));


// Employee.prototype.sayGoodBye = function(){
//     return ` ${this.prenom} Vous dis au revoir  !`
// };


// console.log(employeTheCoon.sayGoodBye());

// let bestViewerDec = new Employee('Le_Coonrad', 'Youtubeur', 'France');
// let unPrototype = Object.getPrototypeOf(bestViewerDec);
// let baseProto = Object.getPrototypeOf(unPrototype)

// baseProto.toString

// console.log(baseProto)

// let color = ["green", "yellow", "blue"];
// let objetName ={name: 'Nico&Co'};

// console.log(Array)