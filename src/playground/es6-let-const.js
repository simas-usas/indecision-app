var nameVar = 'Simas';
nameVar = 'Kostas';
console.log('nameVar:', nameVar);

let nameLet = 'Elija';
nameLet = 'Petras';
console.log('nameLet:', nameLet);

const nameConst = 'Lina';
console.log('nameConst:', nameConst);

const fullName = 'Simas Usas';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);