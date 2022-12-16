function Employee (prenom, nom, pays='Belgique', baseSalaire=1500){
    let hireDate = new Date();
    let calculSalaire = function(){
        var today = new Date();
        return baseSalaire + (baseSalaire * ((today.getYear() - hireDate.getYear()) * 0.5))
    };

    this.baseSalaire = baseSalaire;
    this.prenom = prenom;
    this.nom = nom;
    this.pays = pays;

    this.sayHello = function(){
        return `${this.prenom} vous salue !`;
    };
    
    // this.getSalary = function() {
    //     return calculSalaire();
    // }; // cette manière permet de lire la données sans pouvoir la modifié 
    // this.getHireDate = function() {
    //     return hireDate;
    // }

    Object.defineProperty(this, 'hireDate' /* je donne la valeur que je veux, */ , {  // meilleur façon d'appeler une donnée sans la modifié 
        get : function(){
            return hireDate;
        }
    });
    Object.defineProperty(this, 'salariee', {
        get : function(){
            return calculSalaire();
        }
    })
}
let employees = new Employee('Hans', 'Surless', 'France');
// console.log(employee.getHireDate());
console.log(employees)