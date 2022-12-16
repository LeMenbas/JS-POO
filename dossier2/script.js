function createEmployee(prenom, nom, coutry) {
    return {
        prenom: prenom,
        nom: nom,
        coutry: coutry,
        sayHello :function(){
            return `${this.prenom} vous salue !`;
        }
    };
}  // function factories 
 
let employee1 = createEmployee('damien' ,'balkane' , 'belgique');
console.log(employee1.sayHello())



// constructeur 

function Employee(prenom, nom, pays) {
    this.prenom= prenom;
    this.nom = nom;
    this.pays =pays;
    this.sayHello = function(){
        return `${this.prenom} vous salue !`;
    }
}

let employee2 = new Employee('Eren', 'Jagger', 'Marry-Joie');
console.log(employee2);
console.log(employee2.sayHello())