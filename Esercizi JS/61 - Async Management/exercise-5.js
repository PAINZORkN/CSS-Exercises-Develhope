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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

function fetchPersonId(id){
  return new Promise((resolve,reject) => {
    setTimeout(() => { 
    if(persons.find((item) => item.id === id)){
      resolve (persons.find((item) => item.id === id))
    }else{
      return reject ('ID Not Found')
    }},1000)
  })
}

function fetchJobId(id){
  return new Promise((resolve, reject) => {
    setTimeout( () => {
    if(jobs.find((item) => item.id === id)){
      resolve (jobs.find((item) => item.id === id))
    }else{
      return reject ('ID Not Found')
    }},500)
  })
}

function print(id){
  Promise.race([fetchPersonId(id),fetchJobId(id)])
  .then((first) => {
    if(first.jobTitle === undefined){
      console.log(first.id, first.firstName, first.lastName)
    }else{
      console.log(first.id, first.jobTitle)
    }
  })
  .catch((err) => console.log(err))
}

print(4)