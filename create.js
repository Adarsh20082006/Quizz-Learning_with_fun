let private=document.querySelector(".private");
private.addEventListener("click",()=>{
    document.querySelector(".password").style.display="block";
})
let public=document.querySelector(".public");
public.addEventListener("click",()=>{
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
    const password=document.getElementById("password").value;
    const name=document.getElementById("password").value;
    const type=document.querySelector("input[name='type']:checked").value;
}