const square = function (x) {
    return x * x;
}

//const squareArrow = (x) => {return x * x};

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const fullName = 'Kostas Usas';
const firstName = (fullName) => fullName.split(' ')[0];
console.log(firstName(fullName));