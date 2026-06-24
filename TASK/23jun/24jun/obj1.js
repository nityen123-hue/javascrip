//1
const student = {
  rollNo: 45,
  name: "Manthan",
  course: "JavaScript",
  marks: 85
};

console.log("Student details:");
console.log(student);

student.marks = 90;
console.log("Updated marks:", student.marks);

student.rollNo = 97;
console.log("Updated rollNo:", student.rollNo);

student.grade = "A";
console.log("After adding grade:", student);

delete student.course;
console.log("After deleting course:", student);



//2
const product = {
  productId: 111,
  productName: "Laptop",
  price: 50000,
  stock: 20
};

console.log("Product details:");
console.log(product);

product.price = 55000;
console.log("Updated price:", product.price);

product.category = "Electronics";
console.log("After adding category:", product);

delete product.stock;
console.log("After removing stock:", product);

product.product = function () {
  console.log("Product ID:", this.productId);
  console.log("Product Name:", this.productName);
  console.log("Price:", this.price);
  console.log("Category:", this.category);
};


//3
const employee = {
  empId: 125,
  empName: "Rahul",
  department: "IT",
  salary: 30000
};

console.log("Employee details:");
console.log(employee);

employee.salary = employee.salary * 1.1;
console.log("Updated salary:", employee.salary);

employee.experience = 3;
console.log("After adding experience:", employee);

delete employee.department;
console.log("After deleting department:", employee);

employee.Details = function () {
  console.log("Employee ID:", this.empId);
  console.log("Employee Name:", this.empName);
  console.log("Salary:", this.salary);
  console.log("Experience:", this.experience);
};

employee.Details();


//4
const account = {
  accountNumber: 123456789,
  Name: "nityen",
  balance: 15000
};

console.log("Account details:", account);

account.balance += 5000;
console.log("Balance deposit:", account.balance);

account.accountType = "Savings";
console.log("account:", account);

delete account.accountType;
console.log(" deleting :", account);

account.Balance = function () {
  console.log("Current balance:", this.balance);
};

account.Balance();

//5
const movie = {
  movieName: "Ramanuj",
  ticketPrice: 300,
  Seats: 125,
  Name: "Grand Cinema"
};

console.log("Movie details:");
console.log(movie);

movie.ticketPrice = 350;
console.log("Updated ticket price:", movie.ticketPrice);

movie.movie_Name = "shree jee";
console.log("movie name upadet :",movie.movieName)

movie.Time = "7:30 PM";
console.log("Added Time:", movie.Time);

delete movie.Name;
console.log("After deleting Name:", movie);

movie.movie = function () {
  console.log("Movie Name:", this.movieName);
  console.log("Ticket Price:", this.ticketPrice);
  console.log("upadet move name",this.movie_Name)
  console.log("Available Seats:", this.Seats);
  console.log("Time:", this.Time);
};

movie.movie();