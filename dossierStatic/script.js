class Person {
    constructor(firstName, nom, pays="Belgique"){
        this.firstName = firstName;
        this.nom = nom;
        this.pays = pays    
    }
    sayHello(){
        return ` ${this.firstName} Vous dit Bonjour `;
    }
    static getAllFromUrl(url, callback){
        fetch(url)
        .then(answer => answer.json())
        .then(json => {
            let persons = [];
            json.map(person => persons.push(new Person(person.firstName, person.nom, person.pays)));
            callback(persons);
        });
    }
}

Person.getAllFromUrl('persons.json', function(persons){
    console.log(persons);
    persons.map(person => console.log(person.sayHello()))
})