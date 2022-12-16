let employee = {
    firstName: "Damien",
    lastName : 'Bruyndonckx',
    country : 'Belgique',
    sayHello : function() { // une fonction appelé dans un object devient une méthods
        return `${this.firstName} vous dit bonjour ! `
    }
};


/* dans la boucle for entre les parenthéses employee et le nom de l'obect que je veux bouclées,
 prop et le nom d'une variable qui aura une valeur différente à chaque itérations de la boucles et
 const à étais choisi car à chaque itérations la valeur de prop elle ne peux pas être changer. */
for(const prop in employee) {
    console.log(prop); // accède au nom des propriétés & method de l'object.
    console.log(employee[prop]); // accède à la valeur des methods ou propriétés à chaque itérations.
    console.log(`Lavaleur de la propriété ${prop} est : ${employee[prop]}.`) // permet de faire une synthaxe.
}