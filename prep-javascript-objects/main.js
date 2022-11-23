var person = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  hobby: 'Fighting'
};
console.log('person: ', person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is: ', fullName);
person.job = 'Chef';
console.log('The person\'s current job is: ', person.job);
person.perviousJob = 'Judge';
console.log('The person\'s previous job was: ', person.perviousJob);
console.log('The complete person object: ', person);
