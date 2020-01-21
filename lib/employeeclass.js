class Employee {
    constructor(name, id, title) {
      if (!name) {
        throw new Error("You're missing the name.");
      }
      if (!id) {
        throw new Error("You're missing the ID.");
      }
      if (!title) {
        throw new Error("You're missing the title.");
      }
      this.name = name;
      this.id = id;
      this.title = title;
    }
  
    
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`title: ${this.title}`);
    }
  
    getName() {

    }

    getId(){

    }

    getEmail(){

    }

    getRole(){
        return Employee;
    }
  }
  
  
  const johnny = new Character("Johnny", 30, 75);
  
  johnny.printInfo();

  module.exports = Employee;