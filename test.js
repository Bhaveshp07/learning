function MyConstructor(name) {
    this.myNumber = name;

    this.myMethod = function() {
        console.log(this.myNumber); // 42
    };

    this.myArrowFunction = () => {
        console.log(this.myNumber); // 42
    };
}

const myObject = new MyConstructor("bhavesh");

myObject.myMethod(); // logs 42
myObject.myArrowFunction(); // logs 42
console.log(myObject.myNumber)



function greet(name) {
    if(this.role_v === undefined){
        console.log(`Hello, ${name}`);
    }
    else {
    console.log(`Hello, ${name}! I am ${this.role_v}`);
    }
  }
  
function person(role) {
    this.role_v = role
  }

const admin = new person('admin')
const custumer = new person('customer')
  


// const greetPerson1 = greet.bind(custumer);
// greetPerson1('bhavesh'); 



const obj1 = {
    name: "bhavesh"
}

const obj2 = {
    name: "bhavesh"
}


console.log(obj1 == obj2 );
  