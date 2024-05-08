let privates=document.querySelector(".private");
privates.addEventListener("click",()=>{
    document.querySelector(".password").style.display="block";
})
let publics=document.querySelector(".public");
publics.addEventListener("click",()=>{
    document.querySelector(".password").style.display="none";
})
let show=document.querySelector(".show-password");
show.addEventListener("click",()=>{
    if(document.getElementById("password").type=="text"){
        document.getElementById("password").type="password";
    }else{
        document.getElementById("password").type="text"
    }
})
 function creating(){
    let sec=document.createElement("section");
    document.body.appendChild(sec);
    let span1=document.createElement("span").classList.add("q-name");
    let aside=document.createElement("aside").classList.add("type");
    let span2=document.createElement("span").classList.add("c-name");
    sec.appendChild(span1,aside,span2);
    span1.textContent=qName;
    span2.textContent=cName;   
    aside.textContent=type;
}
    const cName=document.getElementById("c-name").value;
    const password=document.getElementById("password").value;
    const qName=document.getElementById("name").value;
    const type=document.querySelector("input[name='type']:checked").value;

export {cName,password,qName,type,creating};