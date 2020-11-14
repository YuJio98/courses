/*-----------------------------------------ARRAY--------------------------------------------------------------------*/
var id_1 = ["ilyass",21,false,"morocco",22];


string :""
boolean: true or false
array : []
object : {}

// var name = id_1.indexOf(false);

document.getElementById("demo").innerHTML = "name: "  + id_1[0] + "\n ge: " + id_1[1] + "situation: " + id_1[2];

// /* --------------------------------------OBJECT---------------------------------------------------------------*/
or : 
var data = {
    data1 : {name: "ilyass" , age: 22 , sex: "male"} ,
    data1 : {name: "latifa" , age: 22 , sex: "female"} ,
    data1 : {name: "youness" , age: 22 , sex: "male"} ,
    data1 : {name: "adam" , age: 22 , sex: "male"} 
};



var data = {name: "ilyass", age: 22, work: true, language: ["yuuji", true], mFunction: function(){
    return 2 * 2
}};
    data.mFunction = function(){
        return 5 *10
    };
    // delete data.name;
console.log(data);

var data = {name:"ilyass", age:22, merid:false, user:{age:"mellouk"}};
// document.getElementById("demo").innerHTML = data;
alert(data.user.age);
console.log(data);



let point = 50;                                    >=
if(point > 80){                                    <=
    alert("good answer")                            !=
}else if(50<=80){                                    ==
    alert("good")                                    ===
}                                                    <
else {                                               >
    alert("false answer")
}



/*logical operation --------------------------------------------------------------------------------------------*/

var a = true;
var b = false;

if(a==true || b== 5){
    alert("good answer");
}else {
    alert("wrong anwser");
}


/*SWITCH STATEMENT :SWITCH CASE BREAK DEFAULT --------------------------------------------------------------------*/
var fruit = "apple";
switch(fruit){
    case "apple": 
        alert("this is the price of apple");
        break;
    case "banana":
        alert("this is the prise of banana");
        break;
}
                                                                        // i5tibar i7timalat

var num = 0656;
switch(num){
    case (0606):
        alert("this is my number");
        break;
        default:
        alert("this nim does not supported");
        break;
}

/*WHILE LOOP ------------tikrar-----------------------------------------------------------------------------------*/
var count = 1;
while(count<=10){
 document.getElementById("demo").innerHTML += "students: " + count + "<br>";
    //  or alert('');
++count;
};


/*FOR LOOP----------------tikrar------------------------------------------------------------------------------ */
for(var count =0; count <= 10 ; ++count){
    document.getElementById("demo").innerHTML += "student: " + count + "<br>";
};

var id2 = ["name: ilyass", "age: 22", "sex: male"];
for(var count = 0; count<id2.length; ++count){
    document.getElementById("demo").innerHTML += id2[count] + "<br>";
}

/*break loop (for or while)------------------------------------------------------------------------------------- */
var i = 1;
while(i<= 10){
    if(i==7){
    break;                      // tawa9of fi l9ima 7
}
    console.log("ID: "+ i);
 ++i ;  
}
/*continue loop is for for loop----------------------------------------------------------------------------------- */
for(var x = 0; x <=10; ++x){
    if(x ==8, x == 1){
        continue;          //ta5ati ra9em or content
    }
    document.getElementById("demo").innerHTML += x + "<br>";
}
/*function-------------------------------------------------------------------------------------------------------- */
function sayHi(){
    alert("hello my ilyass hope you like my work i did my best for it");
}
sayHi();


or 
function sayHi(){
    alert("hello my name ilyass hope you like my work i did my best for it");
}
in HTML : <button onclick="sayHi()">click here ti see the messange</button>


function sayHi(){
    var myName = "ilyass";
    if(myName === "yujio"){
        alert("hello ilyass you are welcome here!");
    }else {
        alert("sorry your name is not correct!!");
    }
};
in HTML : <button onclick="sayHi()">click here ti see the messange</button>


/*function return--------------------------------------------------------------------------------------------- */


function ageInDays(){
    var age = 22;
    return age * 360;   // return     *360 does not matter
}
document.getElementById("demo").innerHTML = "your age in DAYS :  " + ageInDays() + " days";  //or you can
or ageInDays();



/*function parameter ----------------------------------------------------------------------------------------- */


function myAge(x){
                
    return x * 360;
}
var ageDays = myAge(45);
document.getElementById("demo").innerHTML = "you age in days : " + ageDays +  " days";



function x(myName){

    return "your name is : " + myName + " thanks for your support";
}
document.getElementById("demo").innerHTML = x("yujio");




 function v(fName , sName){
                return "hello " + fName + " " + sName + " you are welcome";
            }
            document.getElementById("demo").innerHTML = v("ilyass" , "mellouk");

/**calculate your age manually---------------------------------------------------------------- */

 function x(age){
    return "your age is " + age * 365 + " years";
  }
    myAges = prompt("what your age ??");
    document.getElementById("demo").innerHTML = x(myAges);


/*self invoke function---------------------------------------------------------------------------------------- */

// write () the function will be inside the braket         it works automatique        very importent
(function x(){
    alert("ilyass mellouk");
})();



(function x(){
    var price = document.getElementById("demo").innerHTML;
    return alert(price * 10);
}());


/*
<input type="number" id="demo" value="number">
<button onclick="x()">convirt price</button>
<div id="price"></div>


function x(){
    var price = document.getElementById("demo").value;
    return document.getElementById("price").innerHTML = price * 10;
};
 function x(){
    var price = document.getElementById("demo").value;
    return document.getElementById("price").innerHTML = price * 10;
   };

*/

calulate you age


/*
<input type="number" id="age">
<button onclick="x()">Calculate Your Age</button>
<div id="num" style="border: 2px solid red;""></div>



function x(){
    var age = document.getElementById("age").value;
    return document.getElementById("num").innerHTML = age * 365;
}
*/


/*onload  event------------------------------------------------------------------------------------------------ */

<head>
<script>
window.onload = function(){
    document.getElementById("num").innerHTML = "hello ilyass this is a javascript thanks for your work"
}
// this method allow you to appear the js in head
</script>
</head>



<head>
    <script>
        window.ondblclick = function(){
        document.getElementById("num").innerHTML = "hello ilyass this is a javascript thanks for your work"
        }
        // this method allow you to appear the js in head
    </script>
</head>

<head>
    <script>
        window.onclick = function(){
        document.getElementById("num").innerHTML = "hello ilyass this is a javascript thanks for your work"
        }
        // this method allow you to appear the js in head
    </script>
</head>

*/



function oneClick(){
    document.getElementById("num").innerHTML = "hello ilyass this is a one click"
   }
   function doubleClick(){
    document.getElementById("num").innerHTML = "hello yujio this is a double click"
   }
  

    <button onclick="oneClick()" ondblclick="doubleClick()">click on me</button>
    <h1 id="num">yujio ken</h1>



/*event: ONCLICK - ONDBLCLICK - ONLOAD - onmouseover  -  onmouseout -  onchange - onkeydown - onkeypress - onkeyup */


    <input type="text" id="input"/>
        <button id="click">click here</button>
        <div id="div"></div>
      
            


        
            var myInput = document.getElementById("input"),
                myDiv = document.getElementById("div"),
                myBtn = document.getElementById("click");

            myBtn.ondblclick = function(){
                    myDiv.innerHTML = myInput.value * 9.45;
                }
        
                let click = document.getElementById("demo");
         
                    click.onclick = function run(){
                        alert("hello world");
                        }


method 3 :   var button = document.getElementById("btn");
button.addEventListener("click", ()=>{
  
});

/*-------------------foreach array----------------------------------------------------------------------25-------- */
to reach to your data in array :       // li3ard l bayanat in easu way
type 1 :
                          1           2          3   // 1 then refresh 2 then refresh 3 . tadhar bitartib 0 . 1 . 2 
    var myHobbies = ["basketball", "tennis" , "swimming"];
    for(var i in myHobbies){         // foreach
        console.log(myHobbies[i]);
}

type 2 :
    var myHobbies = ["basketball", "tennis" , "swimming"];
        myHobbies.forEach(i=>{     // foreach
        console.log(i);
    });

/* ---------------foreach object---------------------------------------------------------------------26--------- */
to reach to your data in object :     // li3ard l bayanat in easu way

var myHobbies = {name: "yujo" , age: 22 , sex: "male" , job: false;}

for(var i in myHobbies){
    console.log(myHobbies[i]);
}

type 2 : Object.keys(myHobbies).forEach(Element=>{
    console.log(myHobbies[Element].name);        // 3ard lbayanat
})

<ol id="demo"></ol> //  --HTML---
var myHobbies = {name: "yujo" , age: 22 , sex: "male" , job: false};
var list =  document.getElementById("demo");
for(var i in myHobbies){
 list.innerHTML += "<li>" + myHobbies[i] + "</li>";
}

/*  css in javascript-------------style--------------------------------------------------------------------27--- */
var css = document.getElementById("id");      // put a var then put style

    css.style.backgroundColor = "black";
    css.style.position = "right";
    css.style.margin = "23px";


/* Query Selector ----------query selector all ------------------------------------------------------------28---- */
    
// lita7did tag in HTML ---- header - body - content - div - span - footer --  it is like CSS

remember that
// query selector : ta7did 3onsor wa7ed ex (a lot of divs in HTML but the FIRST div will be SELECT the other NOT).
<html>
    <header id="head"   class="head"></header>
    <main id="main-1"   class="main-2"></main>
    <footer id="foot"   class="foot"></footer>
</html>
// by name of TAG                                          //or by ID
var x = document.querySelector("header");   /*or by ID*/   var x = document.querySelector("#head");    //  like "css"
var s = document.querySelector("main");     /*or by ID*/   var s = document.querySelector("#main-1");  //  like "css"
var z = document.querySelector("footer");   /*or by ID*/   var z = document.querySelector("#foot");    //  like "css"

// or by CLASS

var x = document.querySelector(".head");
var x = document.querySelector(".main-2");
var x = document.querySelector(".foot");

//query Selector All:  allows you to select all tags in HTML (headers - divs - spans)  it apposite of querySeletor .

<h1>hello ilyass</h1>
<p>hello yujio</p>
<h1>hello hiromi</h1>
<h3>hello zeraf</h3>

        
        var header = document.querySelectorAll("h1 , h3, p");
        // or choose one of them 
        main[0].style.color = "red"

        for(var count = 0 ; count <= header.length ; ++count){
            header[count].innerHTML = "mama";
        }
        


        var main = document.querySelectorAll("main");

        
        for( var count = 0; count <= main.length ; ++count){
            main[count].innerHTML += "this is my family"    // + l9ima l9adima + new 9ima 
        }

/*get Elements By Class Name ---------------------------------------------------------------------------29------- */

var header = document.getElementsByClassName("title");
for(count = 0; count <= header.length; ++count){
    header[count].innerHTML = " javascript"
}
header[0].innerHTML = "mellouk";

/*get elements by tag name -----------------------------------------------------------------------------29--------*/

var header = document.getElementsByTagName("h1");
           
for(count = 0; count <= header.length; ++count){    // .length   very important
  header[count].innerHTML = " javascript"
    header[0].innerHTML = "mellouk";
}

/*if else   or ?        ----------------------------------------------------------------------------------------- */
 method 1 :
if(isTrue){
    console.log("hello world");
} else {
    console.log("not hello");
}
 method 2 :
//  only use this for BOOLEAN datatype :
 isTrue ? console.log("hello world") : console.log("not hello");

/* value : input - textarea  -  select option----------------------------------------------------------------33--- */

// use value to take info from  - textarea --  select option and -- input .

<input id="text" type="text" name="text"/>
<button onclick="getValue()" type="button">click here</button>


function getValue(){
    var text = document.getElementById("text").value;
    console.log(text + " ken");
 }

/*class - constructor   -  object-----------------------------------------------------------------------34------*/

class Mell{           // class            //put the name of the class .  first letter capital.
    constructor(){    // constructor     // the stucture of the class .
        alert("welcome back Hiromi");    // the code that you want to appear .
    }
}
var ken = new Mell();   //  object      li tanfid awamir dial class . new is oblige dont forget it .
or  onload = new Mell();  

/* class Parameters  -----------------------------------------------------------------------------------35---- */  

class Mell{
    constructor(text , pain){     // text and pain : parameters
        
        console.log(text);
        console.log(pain);
        
    }
}
onload = new Mell("yujio ken" , 22);

/* Method  -----------------------------------------------------------------------------------------------36---- */
 // function is outside the class .          method is like function
 // we put method inside the class and outside the constructor (course 34 / 35).


 class App{
    constructor(){
        // type 2
    }
    change_background(){
        document.getElementById("body").style.backgroundColor = "red";   // Method  without write method .
    }
}
var app2 = new App();     //class object  li tanfid awamir
app2.change_background();  // itanfid awamir method      // type 1 
    

class App{
    constructor(){
       this.change_background();   // type 2 
    }
    change_background(){
        document.getElementById("body").style.backgroundColor = "red";
    }
}
var app2 = new App();
// app2.change_background();   //  type 1
    

/*Method return------------------------------------------------------------------------------------------37----- */

class App{
    constructor(){
      this.change_Any();
      document.getElementById("demo").innerHTML = this.change_Any();
    }
  change_Any(){
      return "hello ilyass welcome here";
  }
}
var app2 = new App();   

/*call - METHOD - inside the class----------------------------------------------------------------------41------- */
class App{
    constructor(){
        
    }
    sayHi(){
        console.log("hello ilyass")
    }
}
    var app2 = new App();
    app2.sayHi();  //work the method outside of class


/*Local Storage -----(setItem)----(getItem)-----(removeItem)--------------------------------------------42------ */

localStorage.setItem("key", value);     // key = variable (var)  first letter is uppercase (App)
localStorage.getItem("key");
localStorage.removeItem("key");

Example  : 
    localStorage.setItem("Name", 23);
    alert(localStorage.getItem("Name"));     // work your code
    alert(localStorage.removeItem("Name"));  // delete your data

/*Protocol : href - hostname - pathname - location js -----------------------------------------------------45----- */

location.protocol : return the data of the web (http / https / file ).

ex : var proto = location.protocol;
    alert(proto);

  //  location.href : return the link info

ex :  var proto = location.href;
    alert(proto);




/*-OOP  javascript--------------------------------------------------------------------------------------------------------*/
object has  methods and propertises

object inside it has methods and propertises
methods : codes awamer;   that is what happen 
propertises : 5asa2iss not codes;