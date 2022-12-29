let resultat = '';

const pierre = 'Pierre';
const feuille = 'Feuille';
const ciseau = 'Ciceaux';
let coup_ordi =''; 



for (let i = 0 ; i< 1 ; i++){

    n = Math.random();


    if (n>0 && n<1/3){
        ordi = 'Pierre';
    } else if (n>1/3 && n<2/3){
        ordi = 'Feuille';
    } else {
        ordi = 'Ciseaux';
    }

    coup_ordi += ordi;

    if(ordi == 'Pierre'){
        resultat += feuille; 
    } else if( ordi == 'Ciseaux') {
        resultat += pierre;
    } else if(ordi == 'Feuille'){
        resultat += ciseau;
    }
}

console.log(coup_ordi);
console.log(resultat);

// EXERCICE VEGETA

let level_vegeta = 1;
let force_vegeta = 165;
let puissance_vegeta ;


const ennemis_puissance = [265, 851, 899, 1193];

for(let i = 0; i< ennemis_puissance.length; i++){

    while(puissance_vegeta<=ennemis_puissance[i]) {
        level_vegeta += 1;
        puissance_vegeta = force_vegeta*level_vegeta;
        console.log(level_vegeta);
        console.log(puissance_vegeta);
    }

    force_vegeta += Math.floor(ennemis_puissance[i] *0.1);

    puissance_vegeta = force_vegeta*level_vegeta;

}


// console.log(level_vegeta);
// console.log(puissance_vegeta);