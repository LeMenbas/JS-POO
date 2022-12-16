let resultat = '';

const pierre = 'P';
const feuille = 'F';
const ciseau = 'C';
let coup_ordi =''; 



for (let i = 0 ; i< 4 ; i++){

    n = Math.random();


    if (n>0 && n<1/3){
        ordi = 'P';
    } else if (n>1/3 && n<2/3){
        ordi = 'F';
    } else {
        ordi = 'C';
    }

    coup_ordi += ordi;

    if(ordi == 'P'){
        resultat += feuille; 
    } else if( ordi == 'C') {
        resultat += pierre;
    } else if(ordi == 'F'){
        resultat += ciseau;
    }
}

console.log(coup_ordi)
console.log(resultat)