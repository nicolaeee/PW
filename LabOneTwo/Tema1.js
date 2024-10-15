//Tema 1
 
 
let sirul4 = "bUNă ZIUA, cE MAI fAceȚI?";
let result = sirul4.toLowerCase();
result = result.charAt(0).toUpperCase() + result.slice(1);
 
console.log(result);
 
 
//Tema 2
 
 
let variabila;
 
if (typeof myVar === 'undefined'){
    console.log("Variabila nu este definita.");
 
} else {
    console.log("Variabila este definita.");
}
 
 
 
 
//Tema 3
 
let propozitie = 'Azi avem de facut piata. Aceasta este lista de fructe de cumparat: cirese, portocale, mere, banane.';
let start = propozitie.indexOf(':');
let end = propozitie.indexOf('.', start + 1);
let lista = propozitie.substring(start + 1, end);
let fructe = lista.split(',');
fructe = fructe.map(item =>
    item.replace(/cirese/g, 'caise').replace(/mere/g, 'pere')
);
let nouaListaString = 'Azi avem de facut piata. Aceasta este lista de fructe de cumparat: ' + fructe.join(', ') + '.';
console.log(nouaListaString);
 
//Tema 4
 
let Dinozauri = ['T-Rex', 'Stegozaur', 'Alozaur', 'Velociraptor'];
 
let indexAlozaur = Dinozauri.indexOf('Alozaur');
if (indexAlozaur !== -1) {
    console.log(`Alozaur a fost gasit la index: ${indexAlozaur}`);
} else {
    console.log('Alozaur nu a fost gasit.');
}
 
let indexApatozaur = Dinozauri.indexOf('Apatozaur');
if (indexApatozaur !== -1) {
    console.log(`Apatozaur a fost gasit la index: ${indexApatozaur}`);
} else {
    console.log('Apatozaur nu a fost gasit.');
}
 
 
//Tema 5
 
 
let landmarks = [
    'Casa',
    'Spital',
    'Kaufland',
    'Papadie',
    'Biblioteca',
    'Centru Print',
    'Cafenea',
    'Facultate'
];
 
let stack = [];
 
for (let i = 0; i < landmarks.length; i++) {
    stack.push(landmarks[i]);
}
 
 
console.log("Traseul de la casa la facultate:");
while (stack.length > 0) {
    console.log(stack.pop()); //Landmark-urile sunt scoase din stiva pentru a putea parcurge stiva in ordine inversa
}
 
// Construim stiva pe drumul de intoarcere
stack = [];
 
// landmark-urile inapoi in stiva pt drumul de intoarcere
for (let i = 0; i < landmarks.length; i++) {
    stack.push(landmarks[i]);
}
 
// Drumul de intoarcere
console.log("\nTraseul de intoarcere la casa:");
while (stack.length > 0) {
    let landmark = stack.pop(); // Scoatem landmark-urile din stiva
    console.log(landmark); // Facem afisarea
}