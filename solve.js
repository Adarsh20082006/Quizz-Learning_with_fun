//  import {obj} from "./create.js";
//  console.log(obj);
document.querySelector(".q-name").textContent=localStorage.getItem("qName");
document.querySelector(".type").textContent=localStorage.getItem("type");
document.querySelector(".c-name").textContent=localStorage.getItem("cName");
const password=localStorage.getItem("password");;
// let func=localStorage.getItem("func");
// func;
if(localStorage.getItem("qName")==(null || "") || localStorage.length==0){
    document.querySelector("section").style.display="none";
    document.querySelector("header").innerHTML="<h2 class='no'>No quizzes are added yet</h2>"
}else{
    document.querySelector("section").style.display="block";  
}
