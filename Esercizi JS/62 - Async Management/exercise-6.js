const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`The person with id: ${id} does not exist`);
    }, 1000);
  });
}

async function printconsole(id){
    const personID = await fetchPersonById(id);
    const parseJSON = await JSON.parse(personID);
    console.log(parseJSON)
  }

printconsole(2)
.catch((err) => console.error(err));