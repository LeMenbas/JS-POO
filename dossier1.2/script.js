let employee = {
    firstName: "Damien",
    lastName : 'Bruyndonckx',
    country : 'Belgique',
    sayHello : function() { // une fonction appelé dans un object devient une méthods
        return `${this.firstName} vous dit bonjour ! `
    }
};
console.log(employee);

console.log(employee.firstName);
console.log(employee["lastName"]);

let prop = 'coutry';
console.log(employee[prop]) // le faite que la valeur string 'coutry' correspond à la propriétés de l'object employee elle c'est qu'elle dois appelé sa valeur Belgique. c'est dinamique

console.log(employee.sayHello); // appel la méthod dans l'object 
console.log(employee.sayHello()) // appel la valeur de la méthod dans l'object
console.log(employee['sayHello']()) // autre manière d'appelé une méthods avec les crochets mais tous en plaçant les parenthèse en dehors des crochets
let method = 'sayHello';
console.log(employee[method]()); // encore une autre manière déjà vu pour appelé une propriétés qui fonctionne aussi avec les méthods


/*
Petit cour de vocabulaires js :
dans l'object employee j'ai des members ou memnbres:
parmi c'est membres ils existes des membres et des méthods(function mais une fois dans un object deviens une méthods)
*/

