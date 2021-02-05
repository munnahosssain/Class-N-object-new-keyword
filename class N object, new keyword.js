class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const bigPerson = new/*(new keyword)*/ Person('Mohammad', 'abdullah', 50000);
console.log(bigPerson);
const friendlyPerson = new Person('Ibrahim', 'ismail', 60000);
console.log(friendlyPerson);



// old JavaScript version
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldESPractice = new Person1('old', 'man', 3000)
console.log(oldESPractice);