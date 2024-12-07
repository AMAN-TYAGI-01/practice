// regular function

function display(){
    var name="herry";
    var age=78;
    result=name+age;
    var herry=document.getElementById("demo");
    herry.innerHTML=result;
    herry.style.color="red";
}
// Expression function
const change = function(){
    let name="virat kohli ";
    let age=34;
     let z=document.getElementById("new");
     z.innerHTML=name+age;
     z.style.color="aqua";
     z.style.background="black";
     z.style.textAlign="center";
}
// arrow funtion
const done=()=>{
    var course="mca";
    var add="sehore";
    var mobile=12345678910;
    result=course+" "+add+" "+mobile;
    var aa=document.getElementById("arrow");
    aa.innerHTML=result;
}

function plus(){
    var num1=20;
    var num2=23;
    result= num1+num2;
    document.getElementById("sum").innerHTML=result;
}
const multi=function(){
    let num3=3;
    let num4=3;
    result=num3*num4;
    document.getElementById("multi").innerHTML=result;
}
const divide=()=>{
    let num5=10;
    let num6=2;
    result=num5/num6;
    document.getElementById("divide").innerHTML=result;
}
function addition(){
    let num7=parseInt(document.getElementById("input1").value);
    let num8=parseInt(document.getElementById("input2").value);
    let num9=parseInt(document.getElementById("input3").value);
   let result= num7+num8+num9;
document.getElementById("addition").innerHTML=result;
}
const subtraction=function(){
    let a= parseFloat(document.getElementById("input4").value);
    let b=parseFloat(document.getElementById("input5").value);
    let result=a-b;
    document.getElementById("subtraction").innerHTML=result;
}
const divi=()=>{
    let c=parseInt(document.getElementById("input6").value);
    let d=parseInt(document.getElementById("input7").value);
    let result=c/d;
    document.getElementById("divi").innerHTML=result;
}
function two(){
    let cube=prompt("enter number");
    result=cube*cube*cube;
    document.getElementById("cube").innerHTML=result;
}
// addEventLisner

let button=document.getElementById("more");
button.addEventListener("click",display);
function display(){
    let name="aman";
    let age=40;
    result= name+age;
    document.getElementById("event").innerHTML=result;
}

var v=document.getElementById("two");
v=addEventListener("click",kkk);
function kkk(){
    var firstName="rohit";
    var lastName="sharma";
    var age=40;
    result=firstName+" "+lastName+" "+age;
    document.getElementById("one").innerHTML=result;
}
// bestics
var name="aman";
var city="sehore";
function sh(){
    // result=name+" "+city;
    let h1=document.getElementById("bestics").innerHTML=`this is the ans ${name} ${city}`;
}

const person={
    firstName: "aman",
    secend:34,
    details:function(){
        return `hii my name is${this.firstName}${this.secend}`;
        
    }
    
};
console.log(person.details());
document.getElementById("pen").innerHTML=(person.details());

