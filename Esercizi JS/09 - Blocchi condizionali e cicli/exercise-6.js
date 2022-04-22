function getKeys(obj) {

const getKeys = Object.keys(person);
console.log(getKeys);

}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);

