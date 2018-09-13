class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `I'm ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` My major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name);
        this.homeLocation = homeLocation;
    }
    hasHome() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHome()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
    
}

const me = new Traveler('Simas Usas', 23, 'Kaunas'); 
console.log(me.getGreeting());

const other = new Traveler(); 
console.log(other.getGreeting());