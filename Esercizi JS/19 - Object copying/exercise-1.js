const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon';

// Modifica la proprietà "firstName" di person2 in "Simon"

/*
  Il parametro di person1 viene modificato oltre a quello di person2 poichè alla riga 7
  non accade altro che assegnare a person2 gli stessi valori di person1

  Nella riga 17-18, avviene il cambio di firstName soltanto in person2

  const person2 = Object.assign({}, person1);
 person2.firstName = "Simon";
*/


console.log(person1);
console.log(person2);