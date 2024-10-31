
// function add(x=20,y=20){
   
//     var sum = x+y;
//     // document.write(sum);
//     return sum;
    
// }


// document.write("x=10,y=4 ||  x+y=" + add(10,4));
// document.write("</br>===============</br>");

// document.write("default: = "+add());
// document.write("</br>===============</br>");

// document.write("x=33,y=45 ||  x+y=" + add(33,45));
// document.write("</br>===============</br>");

// document.write("x=30,y=20 ||  x+y=" + add(30,20));
// document.write("</br>===============</br>");
// document.write("x=15,y=5 ||  x+y=" + add(15,5));

// document.write("</br>===============</br>");


//make a div with use fucntion ;


function makeDiv(){

    var div = document.createElement('div');
    div.style.height = "150px";
    div.style.width= "100px";
    div.style.backgroundColor= 'red';
    div.style.margin = "20px";
    div.style.borderRadius="50%";
    document.getElementById('resulDiv').append(div);
}
makeDiv();

function makeDiv1(){
    var div = document.createElement('div');
    div.className="div-one";
    document.getElementById('section').append(div);
   
}
    makeDiv1();

 //catch user input & show;

var fullNameBtn = document.getElementById("fullNameBtn");

fullNameBtn.onclick = function(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName + ' ' + lastName;
    document.getElementById("fullName").value = fullName;
}
//calculator function;
var add= document.getElementById("add");
var sub= document.getElementById("sub");
var sub= document.getElementById("mul");
var sub= document.getElementById("division");


var subId = document.getElementById("byog");


subId.onclick= function(){
    var fNumber = document.getElementById("fNumber").value;
    var lNumber = document.getElementById("secondNumber").value;
     function biyog(){
        var byog;   
        byog = fNumber - lNumber;
        document.write(byog);
        document.getElementById('calculation').append(byog);
        
   biyog();
    
    }
}

// //array 
//var mydata=['savar','JavaScript', 20, true,'banglaadesh'];
//document.write(mydata);
//mydata.push("Web Developer");
//document.write(mydata);
//console.log(mydata);
// //var myarr = array();

// document.write(mydata[1]+ mydata[4]+ mydata[5]);

// document.write("<br>");
// document.write(mydata[2]);
// document.write('<BR>');
// var key;
// for(key in mydata){
//     document.write(mydata[key]+' ');
// }


// var student =['Rubel','cserubelhosen@mail.com','01553326411'];
// for(key in student){
//     document.write('<br>'+student[key]+ ' ');

// }
// document.write("<br>");

// //json object
//  var student ={name: 'sojib',email:"sojib@gmail.com",mobaile:'01950353.5214'};
//  document.write(student.email);
//  document.write("<br>");

// //json array
//  var students = [
//     {name:"sojib",email:'sojib@gmail.com',mobaile:'015235030125',addrss:'Kushtia'},
//     {name:"Rubel",email:'rubel@gmail.com',mobaile:'01950383541'},
//     {name:"rakib",email:'rakinbb@gmail.com',mobaile:'0236559441221'},
//     {name:"rajjak",email:'rajjak@gmail.com',mobaile:'01321654971',address:"Dhaka"},
//  ];

//  document.write(students[2].name + students[3].address + students[3].email);
//  document.write("<br>");
 
//   for(index in students){
//     document.write("<br>" + students[index].name + students[index].email + students[index].mobaile + students[index].address);
//   }
//   console.log(students);



//   var students= {
//     name:'akram',
//     emaail: 'akrma@gamil.com',
//     mobaile:{
//         personal:'0196503441',
//         parent:'102564321'
//     },
//     marks:[10,20,30],

//     add:function(){
//         var sum=0;
//         var key ;
//         for(key in this.marks){
//             sum= sum + this.marks[key];
//         }
//         return sum;
//     }
    
    
//   };

//   document.write("<br>");
//   document.write("Object function: ="+ students.add());



var fname = document.getElementById("fname");

fname.onkeyup = function(){
    document.getElementById('res1').innerHTML=fname.value;
}
var lastName = document.getElementById("lname");
lastName.onkeyup = function(){
    document.getElementById("res2").innerText=lastName.value;
}
var fullName= document.getElementById('fulName');
fullName.onblur = function(){
    document.getElementById('res3').innerHTML=  fname.value + lastName.value;

    
}
    
