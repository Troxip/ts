class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);

accounting.addEmployee("Max");
accounting.addEmployee("Bitch");
accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe();g
