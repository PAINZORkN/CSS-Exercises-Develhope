function getKeys(obj) {

  let keys = [];
  for ( let item in obj){
    keys.push(item);
  }

return keys;

}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);

