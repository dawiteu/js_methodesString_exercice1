let phrase = `Bonjour tout le monde      `; 

//long de la ph
console.log(phrase.length);


// sans espaces ; 
phrase = phrase.trim(); 

console.log(phrase.length);

// uniquemenet la -1 lettre 
let nouvellePhrase = phrase.substr(phrase.length-1, 1);

console.log(nouvellePhrase);


// sans quel mot? 
let sans = "Bonjour "; 

let sanssalut = phrase.replace(sans, ''); 

console.log(sanssalut); 


// avec le mot ; 
let avecsalut = sans.concat(sanssalut);

console.log(avecsalut);

// supp la ph sauf: les 3 sont ok ; ; 

let nouvelleph2 = phrase.substr(0, sans.length);
console.log(nouvelleph2);

//let nouvelleph2 = phrase.slice(0, sans.length);
//console.log(nouvelleph2);

//let nouvelleph2 = phrase.split('Bonjour');  
//console.log(nouvelleph2[1]);



// exo 2 ; 
let phph2 = "Ceci est une variable de type number"; 

phph2 = phph2.replace('number','string>>');
console.log(phph2);


let phph3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer  numbeR"; 

//let p3 = phph3.toLowerCase();

let patt = /\b(N|n)\w+\b/g;

let p3 = phph3.replace(patt, "number"); 

console.log(p3);






