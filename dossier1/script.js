let employee = {
    firstName: 'Marie',
    lastName: 'Bigard',
    age: 25
};  /* Manière classique de crée un object et populaire*/
// Bon à savoir les propriétés apparait par ordre alphabétique dans le console.log

console.log(employee);

let employees = new Object();
employees.firstName = 'Salomon';
employees.lastName = 'Dundee';
console.log(employees); /* deuxième manière de crée un object mes moins courant */

// ajout d'une propriétés dans un object

employee.email ="marie.bigard@email.com"
console.log(employee)
employee["coutry"]= 'belgique';
console.log(employee);
employee["date de naissance"]= "05 décembre 1997" // l'avantage des crochet pour rajouté des propriétés et de pouvoir mettre des espaces entre les mots de la propriétés

// autre avantage -->
let prop = 'age';
employees[prop] = 44;
console.log(employees)
// fin

//  Maninière de supprimé des propriétées dans un object 'delete'

delete employee['date de naissance']
delete employee.coutry
console.log(employee)