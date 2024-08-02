
// Object prototypes
const student = {
    name: 'John',
    age: 25,
    printName: function() {
        console.log(this.name);
    }
};


const employee = { 
    calculateTax: function() {
        console.log("the tex rate is10%");
    }
}; 

const burhan2 = {
    name: 'Burhan',
    age: 25,
    salary: 5000,
    printName: function() {
        console.log(this.name);
    }
};
const burhan3 = {
    name: 'Burhan',
    age: 25,
    salary: 5000,
    printName: function() {
        console.log(this.name);
    }
};
const burhan = {
    name: 'Burhan',
    age: 25,
    salary: 5000,
    printName: function() {
        console.log(this.name);
    },
    calculateTax: function() {
        console.log("the tex rate is100%");
    }
};
burhan.__proto__ = employee;
burhan2.__proto__ = employee;
burhan3.__proto__ = employee;

// classes 

class employeee {
    name;
    age;
    salary;
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    printName() {
        console.log(this.name);
        return this.name;
    }
    calculateTax() {
        console.log("the tex rate is10%");
    }
}


let emp1 = new employeee('Burhan', 25, 5000);
let emp2 = new employeee('naseeb', 25, 5000);
let emp3 = new employeee('ajmal', 25, 5000);
let emp4 = new employeee('fatiq', 25, 5000);
console.log(emp1);
emp1.calculateTax();
emp2.calculateTax();
emp3.calculateTax();
emp4.calculateTax();
console.log(emp1.printName());
console.log(emp2.printName());
console.log(emp3.printName());
// create a list to store objects

let employees = [];
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
employees.push(emp4);

employees.forEach(element => {
    console.log(element.printName());
    element.calculateTax();
    
});


//class inheritance

class shapes
{
    constructor(shape,color)
    {
        this.shape = shape;
        this.color = color;
    }
    draw()
    {
        console.log("Thae shape is " + this.shape + " and color is " + this.color);
    }
}

class square extends shapes
{
    constructor(shape,color, size)
    {
        super(shape, color );
        this.size = size;
    }
    area()
    {
        console.log("Area of square is " + this.size * this.size);
    }
}
class circle extends shapes
{
    constructor(shape,color, radius)
    {
        super(shape,color);
        this.radius = radius;
    }
    area()
    {
        console.log("Area of circle is " + 3.14 * this.radius * this.radius);
    }
}
class rectangle extends shapes
{
    constructor(shape, color, width, height)
    {
        super(shape,color);
        this.width = width;
        this.height = height;
    }
    area()
    {
        console.log("Area of rectangle is " + this.width * this.height);
    }
}

let s = new square("square", "red", 5);
let c = new circle("circle", "blue", 5);
let r = new rectangle("rectangle", "green", 5, 10);
console.log(s.area() , s.draw());
console.log(c.area() , c.draw());
console.log(r.area() , r.draw());