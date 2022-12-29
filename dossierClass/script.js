'use strict';

class Person {
    constructor(prenom, nom , pays="France"){
        this.prenom = prenom;
        this.nom =nom;
        this.pays= pays
    }
    sayHello() {
        return `${this.prenom} vous passe le bonjour`
    }
}
const _baseSalary = Symbol(); // permet de déclaré une propriété ou une méthod en privée

class Salarie extends Person {
    constructor(prenom, nom , pays="France", salaire){
        super(prenom,nom,pays);
        this[_baseSalary] = salaire
    }
}



class Customer extends Person {
    constructor(prenom, nom , customerId, pays="France"){
        super(prenom, nom, pays="France");
        this.customerId = customerId
    }
}


const customer = new Customer("Hans", "lans", 1)
const firstSalarie = new Salarie('Menbas', 'Gambas',"Japan", 1620);

console.log(firstSalarie);
firstSalarie[_baseSalary] = 3000; // firstSalarie["propriété ou méthod"] permert de changer la valeur privée.
console.log(firstSalarie);
console.log(firstSalarie.sayHello());
console.log(customer);