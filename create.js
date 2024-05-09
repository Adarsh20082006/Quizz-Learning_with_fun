// export {cName,password,qName,type};
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
document.querySelector(".create").addEventListener("click",creating);
function creating(){
    localStorage.setItem("cName",document.getElementById("c-name").value)
    localStorage.setItem("password",document.getElementById("password").value)
    localStorage.setItem("qName",document.getElementById("name").value)
    localStorage.setItem("type",document.querySelector("input[name='type']:checked").value) ;
    localStorage.setItem("func",()=>{ 
        let sec=document.createElement("section");
        document.body.appendChild(sec);
        let span1=document.createElement("span").classList.add("q-name");
        let aside=document.createElement("aside").classList.add("type");
        let span2=document.createElement("span").classList.add("c-name");
        sec.appendChild(span1,aside,span2);
        span1.textContent= localStorage.getItem("cName");
        span2.textContent=localStorage.getItem("qName");   
        aside.textContent=localStorage.getItem("type");
})
}
