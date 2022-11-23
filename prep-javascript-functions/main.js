// 1
function addTwoNumbers(a, b) {
  return a + b;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise ', addTwoNumbersResult);

// 2
function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise ', convertHoursToMinutesResult);

// 3
function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var getGreetingResult = getGreeting('Bobby');
console.log('getGreeting Exercise ', getGreetingResult);

// 4
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise ', addAndMultiplyBy5Result);

// 5
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise ', multiplyAndDivideBy5Result);

// 6
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise ', subtractTwoNumbersResult);

// 7
function getCircleCircumference(radius) {
  return Math.PI * 2 * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise ', getCircleCircumferenceResult);

// 8
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Joe', 'Biden');
console.log('getFullName Exercise ', getFullNameResult);

// 9
function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log('cube Exercise ', cubeResult);
