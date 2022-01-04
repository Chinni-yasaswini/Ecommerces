//Declare a variable firstname and initialize it with the value 'Lata'.
var firstname;
firstname='Lata';
console.log(firstname);
//Which value does x have after execution of the following code?
let x = 'Geeta';
console.log(x);
//Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'.
var flower = 'rose'
var tree = 'maple'
console.log(flower,tree);
//Which value does x have after execution of the following code?
let p = 'Tic';
p = 'Tac';
p = 'Toe';
console.log(p);
//Which value does x have after execution of the following code?
let x1 = 'Laurel';
let y1 = 'Hardy';
let z = y1;
y1 = x1;
x1 = z;
console.log(x1);
//Define a function hello that returns 'Hello world!'.
function helloo() {
    return "Hello world!";
    }
    helloo();
    console.log(helloo());

    //Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.
    function a() {
        return 'Hello a!';
        }
        function b() {
        return 'Hello b!';
        }
        a();
        console.log(a());
        b();
        console.log(b());
        //1. Define a function greet returning the value 'Haydo!'.
function greett() {
    return 'Haydo!';
    }
    let salutation = greet();
    greett();
        console.log(greett());
    //Which value does x have after execution of the following code?
    function hello() {
        return 'Hi!';
      }
      let x3 = hello();
      hello();
console.log(hello());
//Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'
function echo(r){
    console.log(r);
    return(echo);
}
echo('Greta')
echo('H20')
    //Which value does x have after execution of the following code?
    function reply(phrase) {
        return phrase;
      }
      
      let x4 = reply('How do you do?');
      console.log(x4);
      //Write a function greet having one parameter and returning 'Hello <parameter>!
      function greet(yassu) {
        return 'Hello ' + yassu + '!';
        }
        greet();
        console.log(greet());
        //Which value does x have after execution of the following code?
        function whereIs(name) {
            return 'Where is ' + name + '?';
          }
          
          let y2 = whereIs('Jacky');
          console.log(y2);
          //Which value does x have after execution of the following code?
          function hi(name) {
            return 'Hi ' + name + '!';
          }
          
          let h1 = hi('Selva');
          let h2 = hi('Pola');
          let x5 = h1 + ' ' + h2;
          console.log(h1,h2);
          //Write a function log that logs 'Hello Console!'. If you are working with a desktop browser, open the developer tools to see the output there as well.
          function log() {
            console.log('Hello Console!');
            }
            log();
            //Write a function log, that takes a parameter and logs this parameter.
            function logss(Y) {
              console.log(Y);
              }
              logss('yasu');
              //17.Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged.
              function shout(water) {
                let result = water + water;
                console.log(result);
                return result;
                }
                shout("Fire");
            //18.Which value does x have after execution of the following code?
            function double(name) {
              return name + ' and ' + name;
            }
            
            let x6 = double('Roy');
            console.log(x6);
            //19.Write a function length that takes a string and returns the number of characters of the string.
            function length(xy) {
              return xy.length;
              }
              console.log(length("yash"));
              //20.Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.
              function toCase(yassu) {
                return yassu.toLowerCase() + '-' + yassu.toUpperCase();
                }
                console.log(toCase("Yassu"));
                //21.Write a function shortcut that takes two strings and returns the initial letters of theses strings.
                function shortcut(x1,y2) {
                  return x1.charAt(0) + y2.charAt(0);
                  }
                  console.log(shortcut("two","three"));
                  //22.Write a function firstChar, which returns the first character that is not a space when a string is passed.
                  function firstChar(Gandhi) {
                    let trimmedGandhi = Gandhi.trim();
                    return trimmedGandhi.charAt(0);
                    }
                    console.log(firstChar(" Rise"));
                    //23.Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.
                    // function indexOfIgnoreCase(x,y) {
                    //   let xLower = x.toLowerCase();
                    //   let yLower = y.toLowerCase();
                    //   return xLower.indexOf(yLower);
                    //   }
                    //   console.log(indexOfIgnoreCase(yLower));
//  1) round off all the numbers in an array and sum them [9.7, 6.4, 3.8, 2.9, 6.8]
      
     let t1 =   Math.round([9.7, 6.4, 3.8, 2.9, 6.8].reduce((a, b) => a + b, 0))
     console.log(t1);
 // 2) check if a particular the property value(firstName) in the array of object is same or not
 let t2 = [{
     firstName: 'alina',
     age: 23,
     id: 2
}, {
    firstName: 'alina',
     age: 22, 
    id: 3
 },
 {
    firstName: 'alina',
    age: 22,
     id: 4
 }]
 let obj1=t2[0];
let obj2 = t2[1] ; 
let obj3 = t2[2];
if(obj1.firstName === obj2.firstName && obj2.firstName === obj3.firstName){
console.log('true');
}
 else{console.log('false');}
  // 3) get the value of the first element in an array that has value greater than 20
   let t3 = [9, 89, 78, 9, 7].find(e => {
    return e >= 20;
});
console.log(t3);
 // 4) get the value of the first elment in an array that has value less than 2
let t4 = [9, 89, -5, 9, -1].filter(e =>{
  return e < 2;
});
console.log(t4);
 // 7) check element is odd or even in an array [90, 89, 56, 45]
let t7 = [90, 89, 56, 45]

let odds = t7.filter(n => n%2)
let evens = t7.filter(n => n%2 == 0)
console.log(evens);
console.log(odds);
 // 8) sum of all the salaries and display it
 let t8 = [{
salary: 56000,
},
{
    salary: 90000
},
{
    salary: 80000
}]
.reduce((prev, cur) =>  prev + cur.salary, 0);

console.log('Total salary:', t8);


          
          
          
  