  /*async function fetchData(){
     try{
        const response= await fetch("https://api.example.com/data");
        const data= await response().json();
        console.log(data)

     }
     catch(error){
        console.log(error);
     }
  }
*/

//const { reject } = require("async");

  // set time out
 /* let vari="hello";
  console.log(vari)
  setTimeout(()=>{
    console.log("delayed")
  }, 2000)
  console.log('end');
*/

  /*const setInter=()=>{
       for(let i=0;i<10;i++){
        setTimeout(()=>{
            console.log(i);
        }, 2000*i)
       }
  }
  setInter();
*/

  /*function outerfunction(){
    let name="om paraksh"
    function innerfunction(){
        console.log(name);
        
    }
   return innerfunction;
  }
    let func=outerfunction()
    console.log(func);
     func()
 */

     //importtant and  simple
    /* function makeFUnc(){
        const name="Mozila"
        function dispalyNmae(){
            console.log(name);
        }
        return dispalyNmae;
     }
     const func=makeFUnc();
     func();
     */

     // promises in js
    /*function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = "some data";
                resolve(data);
            }, 2000);
        });
    }
    
    fetchData()
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        });*/
    // hi how are you
    // This is the callback function
function greeting(name) {
  return `Hello, ${name}!`;
}

// This is the higher-order function that takes a callback
function processUserInput(callback) {
  const name = 'Alice'; // Simulating user input
  const message = callback(name); // Call the callback function with the user input
  console.log(message); // Log the returned message
}

// Using the processUserInput function with the greeting callback
processUserInput(greeting);

// call back functions
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("GFG", sayGoodbye);