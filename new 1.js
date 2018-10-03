<!DOCTYPE html>
<html>
<head>
 <title>CIT 261 | Loops</title>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" type="text/css" href="index.css" media="screen">
<script type="text/javascript">
 
/**********************For Loop*********************/
function forLoop()
{
  var number = "";
  var num = 4;
  for (var i = 0; i < num; i++) 
  { 
    var random = Math.floor((Math.random() * 100) + 1); 
    if (i == 4)
    {
      number += random;
    } 
    else
    {
      number += random + " ";
    }
      document.getElementById('forloop').innerHTML= number;
    }
}
/**********************While Loop*********************/
function whileLoop(){
  var text = "";
  var num = 0;
  while (num < 20)
  {
    text+= num+1; 
    num++;
  }
  document.getElementById("whileloop").innerHTML = text; 
}
/**********************While Do Loop*********************/
function whileDoLoop() {
  var count = "";
  var num = 1;
    do {
        count += "<br> This number is " + num;
        num++;
    }
    while (num < 5 + 1)
  document.getElementById("outputDo").innerHTML= count;
}
function clearDo() {
 document.getElementById("outputDo").innerHTML = "";
}
/********************IF Statement********************/
function process() {
    var numberGrade = document.getElementById('enterGrade').value;
    var myGrade = ifStatement(numberGrade);
    document.getElementById("leGrade").innerHTML = myGrade;
  }
function ifStatement(grade){
  
  var leGrade = "";
  if (grade >= 95 && grade <= 100)
  {
     leGrade = "A";
  }
  else if (grade >= 90 && grade <= 94)
  {
    leGrade = "A-";
  }
  else if (grade >= 85 && grade <= 89)
  {
    leGrade = "B";
  }
  else if (grade >= 80 && grade <= 84)
  {
    leGrade = "B-";
  }
   else if (grade >= 75 && grade <= 79)
  {
    leGrade = "C";
  }
  else if (grade >= 70 && grade <= 74)
  {
    leGrade = "C-";
  }
  else if (grade >= 65 && grade <= 69)
  {
    leGrade = "D";
  }
   else if (grade >= 60 && grade <= 64)
  {
    leGrade = "D-";
  }
  else 
  {
    leGrade = "F";
  }
  return leGrade;
}
function clearGrade(){
  document.getElementById('enterGrade').value = "";
  document.getElementById("leGrade").innerHTML = "";
}
/**************Parameters and Vairables*****************/
function convert(degree){
  var iDegree;
  if ( degree == 'C') {
    iDegree = document.getElementById('c').value * 9 / 5 + 32;
     document.getElementById('f').value = Math.round(iDegree);
  }
  else
  {
     iDegree = (document.getElementById('f').value -32) * 5 /9;
     document.getElementById('c').value = Math.round(iDegree);
  }
}
     
/**********************Array*************************/
 var names = new Array();
 var phone = new Array();
function array() {
  var inputArray1 = document.getElementById('inputArray1').value;
  var inputArray2 = document.getElementById('inputArray2').value;
    names.push(inputArray1);
    document.getElementById("inputArray1").value = " ";
    phone.push(inputArray2);
    document.getElementById("inputArray2").value = " ";
    document.getElementById("arrayDemo1").innerHTML = names + "  ";
    document.getElementById("arrayDemo2").innerHTML = phone + "  ";
}
function clearArray() {
  names = [];
  phone = [];
  document.getElementById("arrayDemo1").innerHTML = names;
  document.getElementById("arrayDemo2").innerHTML = phone;
}
/**********************Associative Array*********************/
function asArray(){
  var asInput = document.getElementById('asArrayinput').value;
  var computer = {
    Brand:"Apple MacBook Pro 15\"",
    Year:"Mid 2015",
    Software: "macOS Sierra V.10.12.3(Latest update!)",
    Processor:"2.5 GHz Intel Core i7",
    Memory:"16 GB 1600 MHz DD3",
    Graphic:"Intel 1.5GB & AMD Radeon 2G R9 M370X",
  }
    document.getElementById('asArrayOutput').innerHTML = computer[asInput];
}
</script>

</head>
<body>
  <header>
 <h1>CIT 261 Mobile Application-BYUI</h1>
 <ul>
  <li><a href="index.html">Home</a></li>
 </ul>
</header>
 
 <div class="mainPage">

 <!--For Loop-->
 <div class="forLoop">
<h3>For Loop Example</h3>
<p> Get a random number<br>
 <button type="button" onclick="forLoop()">Generator</button><br>
<div id="forloop"/>
</div>
 
<!--While Loop-->
<div class="whileLoop">
<h3>While Loop Example</h3>
<p>Count till 20<br>
 <button type="button" onclick="whileLoop()">Count</button><br>
<div id="whileloop"/>
</div>

<!--While Do Loop-->
<div class="doLoop">
<h3>While Do Loop Example</h3>
 <button type="button" onclick="whileDoLoop();">Count</button>
  <button type="button" onclick="clearDo();">Reset</button>
 <div id="outputDo"></div>
</div><br><br>

<!--If Statement-->
<div class="ifStatement">
 <h3>If Statement Example</h3>
 <strong>Enter Score </strong><br><br>
 <input type="text" id="enterGrade" onclick="process();"><br>
<button type =button onclick="process();">Calculate Grade</button>
<button type="button" onclick="clearGrade();">Rest</button>
<div id="leGrade"></div>
</div>

<!--Parameters and Vairables-->
<div class="parameters">
<h3>Parameters and Vairables</h3>
<strong>ENTER DEGREE</strong><br>
<input type="input" id="c"> 
<button type="button" onclick="convert('C')">Celsius Degrees </button><br>
<input type="input" id="f"> 
<button type="button" onclick="convert('F')">Fahrenheit Degrees </button>

</div>

<!--Array-->
<div class="array">
 <h3>Array</h3>
 <p>Add family friends's name and phone number</p>
  Name:<input type="input" id="inputArray1">
  Cell:<input type="input" id="inputArray2"><br>
<button type="button" onclick="array();">Add</button>
<button type="button" onclick="clearArray();">Rest</button>
 <div id="arrayDemo1"></div>
 <div id="arrayDemo2"></div>
</div>

<!--Associative Array-->
 <h3>Associative Array</h3>
 <p>Would you like to know what computer do I use for school?<br>
 Please type these options below</p>
    <ul>
    <li>Brand</li>
    <li>Year</li>
    <li>Software</li>
    <li>Processor</li>
    <li>Memory</li>
    <li>Graphic</li>
    </ul>
    <input type="input" id="asArrayinput">
    <button type="button" onclick="asArray();">Submit</button>
 <div id="asArrayOutput"></div>
</div>
 </div>
 </div>

 <footer>&COPY; 2017 Makram Ibrahim </footer>
</body>
</html>