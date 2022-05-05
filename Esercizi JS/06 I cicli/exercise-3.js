function adultFilter(param) {


  /*
    let arrayMaggiorenni = [];
  
    for(item of persons){
      if(item.age>=18){
        arrayMaggiorenni.push(item);
      }
    }
    return arrayMaggiorenni;
  
  } */



  let arrayMaggiorenni = [];

  for (let i = 0; i < param.length; i++) {
    if (param[i].age >= 18) {
      arrayMaggiorenni.push(param[i]);
    }
  }
  return arrayMaggiorenni;
}




const persons = [

  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];


const adults = adultFilter(persons);
console.log(persons);
console.log(adults);



