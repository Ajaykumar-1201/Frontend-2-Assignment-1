let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].profession === "developer") {
      console.log(arr[i]);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  console.log({id: 4, name: 'hack', age: 20, profession: 'developer'});
}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].profession === "admin") {
      arr.splice(i, 1)
    }
  }
}

function concatenateArray() {
  //Just create a new array containing 2 
  //employee details and push that into old array using for loop
  let arr1 = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
  ];

  for(let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }

  console.log(arr);

  //Write your code here, just console.log
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
