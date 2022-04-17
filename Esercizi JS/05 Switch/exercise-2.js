// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  
switch (role) {
  case 'ceo':
    console.log('ceo 2200');
    break;

    case 'manager':
    console.log('manager 1800');
    break;

    case 'cto':
    console.log('cto 1800');
    break;

    case 'developer':
    console.log('developer 1500');
    break;

    case 'other':
    console.log('default 1000');
}
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);