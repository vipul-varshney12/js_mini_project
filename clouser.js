/*function outer(){
    var outervar="hello"
    function inner(){
        console.log(outervar);
    }
    return inner;
}
var clouserfunc=outer();
clouserfunc();
*/

// lexical scope
/*function outer(){
    let username="hitesh"
    function inner(){
        console.log(username);
    }
    function innertwo(){
        console.log(username)
    }
    inner()
    innertwo()
}
outer()
console.log(username);
*/
// parent fdunction ka  scope child le sakte hai par child ka  scope xhild nhi le  sakta


// clousers
 function makeFUnc(){
    const name="Mozila"
    function dispalyNmae(){
        console.log(name);
    }
    return dispalyNmae;
 }
 const func=makeFUnc();
 func();