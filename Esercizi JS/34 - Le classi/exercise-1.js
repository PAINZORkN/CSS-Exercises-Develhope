class Person {
    constructor(name,lastName){
        this.firstName = name;
        this.lastName = lastName;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(`${developer.firstName} ${developer.lastName}`);