// this is himanshu document //

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap(arr) {
    //Write your code here , just console.log

    let developers = arr.filter(person=>person.profession=="developer")
    developers.map(developer=> {
    console.log(developer)
  })

  }
  
  function PrintDeveloperbyForEach(arr) {
    //Write your code here , just console.log

    let developers = arr.filter(person=>person.profession=="developer")
    developers.forEach(developer=> {
        console.log(developer)
    })
  }
  
  function addData() {
    //Write your code here, just console.log
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let filteredArr = arr.filter(employee=>employee.profession !="admin");
    console.log(filteredArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  }