// this is himanshu document //

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];


//sol=>1
  function PrintDeveloperbyMap(arr) {
    //Write your code here , just console.log
arr.map((arr) => {
        if (arr.profession == "developer") {
            console.log(arr);
        }
    });
  }

// sol=>2
  function PrintDeveloperbyForEach(arr) {
    //Write your code here , just console.log
      arr.forEach((arr) => {
        if (arr.profession == "developer") {
            console.log(arr);
        }
    });
  }

//sol=>3
  function addData() {
    //Write your code here, just console.log
   let newEmployee = { id: 4, name: "Nikhil", age: "23", profession: "Don" };
       employees.push(newEmployee);
        console.log(employees);
  }


//sol=>4
  function removeAdmin() {
    //Write your code here, just console.log

      let arr = arr.filter((arr) => {
        if (arr.profession != "admin") {
            console.log(arr)
            }
        });
  }


//sol=>5
  function concatenateArray() {
    //Write your code here, just console.log

      let createNewEmployees = [
        { id: 5, name: "Deepanshu", age: "22", profession: "Dancer" },
        { id: 6, name: "Neeraj", age: "50", profession: "Fashion designer" },
        { id: 7, name: "Himanshu", age: "22", profession: "CEO" }
      ];
      
      let newEmployeeAdd = arr.concat(createNewEmployees);
      console.log(newEmployeeAdd);
  }
