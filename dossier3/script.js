function Employee (prenom, nom, pays='Belgique', base=1500){
    let hireDate = new Date();
    let calculSalaire = function(){
        var today = new Date();
        return baseSalaire + (baseSalaire * ((today.getYear() - hireDate.getYear()) * 0.5))
    };

    let baseSalaire = base;
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
    }); 
    Object.defineProperty(this, 'baseSalaire', {
        get: function() {
            return baseSalaire;
        },
        set : function(newSalaire) {
           if(typeof(newSalaire) == 'number' && newSalaire > baseSalaire) {
            baseSalaire = newSalaire;
           } else {
            console.log("le salaire n'est pas correct par rapport au précédent.")
           };
        }
    });
}
let employees = new Employee('Hans', 'Surless', 'France');
// console.log(employee.getHireDate());
employees.baseSalaire= 1559
console.log(employees.salariee)