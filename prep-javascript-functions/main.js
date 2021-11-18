function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumers Exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
  // could return a template literal and display alert window for added pazzaz 🤷‍♀️
}

var greeting = getGreeting('World');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var sum = num1 + num2;
  return sum * 5;
  // could be refactored with less code as: return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  var product = num1 * num2;
  return product / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumferece = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', circumferece);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var numberCubed = cube(5);
console.log('cube Exercise:', numberCubed);
