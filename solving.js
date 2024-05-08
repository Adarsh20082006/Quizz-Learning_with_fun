document.body.innerHTML=localStorage.getItem("quiz");
// import * as i from "/creating.js"

let answer="";
let par=document.querySelectorAll("p");
let parLen=document.querySelectorAll("p").length;
for(let n=0;n<parLen;n++){
    if(par[n].querySelectorAll("[type='radio']")[0].checked){
       answer+=0;
    }
  else if(par[n].querySelectorAll("[type='radio']")[1].checked){
    answer+=1;    
  }
    else if(par[n].querySelectorAll("[type='radio']")[2].checked){
        answer+=2;
    }
    else if(par[n].querySelectorAll("[type='radio']")[3].checked){
        answer+=3;
    }
  
}console.log(answer );
let spans=document.querySelectorAll("p span")
let radio=document.querySelectorAll("p input[type='radio']");
let radLen=document.querySelectorAll("p input[type='radio']").length;
for(let m=0;m<=radLen-1;m++){
radio[m].removeAttribute("disabled");
radio[m].removeAttribute("checked");
}
for(let j=0;j<parLen;j++){
for(let k=0;k<radLen;k++){
   radio[k].addEventListener("click",()=>{
        if(k==answer[j]){
            spans[k].style.color="green";
            radio[k].setAttribute("checked","checked");
        }
        else{
            spans[k].style.color="red" 
        }
    })
  
}}