var mystudent = {
   name : "ronaldo",
   age : 40,
   grade : 9
};
var myJSON = JSON.stringify(mystudent);
var newStudentObj = JSON.parse(myJSON);
document.getElementById("result").innerHTML = 
newStudentObj.name;
