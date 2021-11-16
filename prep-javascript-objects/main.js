const person = {
  firstName: 'Marie',
  lastName: 'Curie',
  hobby: 'Bagging Nobel Prizes'
};
console.log('person object:', person);

const fullName = person.firstName + ' ' + person.lastName;
/* as a template literal, often easier to read:
   `${person.firstName} ${person.lastName}`; */
console.log("The person's name is:", fullName);

person.job = 'Physicist and Wartime Radiologist';
console.log("This person's current job is:", person.job);

person.previousJob = 'Governess and Magnet-Wiz';
console.log("This person's previous job was:", person.previousJob);

console.log('The complete person object:', person);
