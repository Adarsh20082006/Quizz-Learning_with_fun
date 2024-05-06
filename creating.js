let i = 0;
document.querySelector(".new").style.display = "none";

let a_right = document.querySelector(".a");
let b_right = document.querySelector(".b");
let c_right = document.querySelector(".c");
let d_right = document.querySelector(".d");
function addingques() {
    i++;
    document.querySelector(".questions").style.display = "block";
    let a = document.querySelector(".Option1").value;
    let b = document.querySelector(".Option2").value;
    let c = document.querySelector(".Option3").value;
    let d = document.querySelector(".Option4").value;
    document.querySelector(".nextQues").style.display = "none";
    document.querySelector(".newQues").style.display = "block";
    document.querySelector("#ques").style.display = "none";
    let par = document.createElement("p");
    document.querySelector("textarea").classList.add("textarea" + i)
    let sec = document.querySelector(".questions");
    let ques = `${i}. ${document.querySelector(".textarea1").value}`;
    par.innerHTML = ques + "<br>";
    sec.appendChild(par);
    let op_1 = document.createElement("input");
    op_1.setAttribute("type", "radio");
    op_1.setAttribute("name", "opt" + i);
    op_1.classList = i + "op1";
    par.appendChild(op_1);
    let sp1 = document.createElement("span");
    par.append(sp1);
    sp1.innerHTML = a + "<br>";

    let op_2 = document.createElement("input");
    op_2.setAttribute("type", "radio");
    op_2.setAttribute("name", "opt" + i);
    op_2.classList = i + "op2";
    par.appendChild(op_2);
    let sp2 = document.createElement("span");
    par.append(sp2);
    sp2.innerHTML = b + "<br>";

    let op_3 = document.createElement("input");
    op_3.setAttribute("type", "radio");
    op_3.setAttribute("name", "opt" + i);
    op_3.classList = i + "op3";
    par.appendChild(op_3);
    let sp3 = document.createElement("span");
    par.append(sp3);
    sp3.innerHTML = c + "<br>";

    let op_4 = document.createElement("input");
    op_4.setAttribute("type", "radio");
    op_4.setAttribute("name", "opt" + i);
    op_4.classList = i + "op4";
    par.appendChild(op_4);
    let sp4 = document.createElement("span");
    par.append(sp4);
    sp4.innerHTML = d + "<br>";


    if (a_right.checked) {
        op_1.setAttribute("checked", "checked");
        //    op_1.setAttribute("disabled","disabled");
        op_2.setAttribute("disabled", "disabled");
        op_3.setAttribute("disabled", "disabled");
        op_4.setAttribute("disabled", "disabled");
    } else if (b_right.checked) {
        op_2.setAttribute("checked", "checked");
        op_1.setAttribute("disabled", "disabled");
        // op_2.setAttribute("disabled","disabled");
        op_3.setAttribute("disabled", "disabled");
        op_4.setAttribute("disabled", "disabled");
    } else if (c_right.checked) {
        op_3.setAttribute("checked", "checked");
        op_1.setAttribute("disabled", "disabled");
        op_2.setAttribute("disabled", "disabled");
        // op_3.setAttribute("disabled","disabled");   
        op_4.setAttribute("disabled", "disabled");
    } else if (d_right.checked) {
        op_4.setAttribute("checked", "checked");
        op_1.setAttribute("disabled", "disabled");
        op_2.setAttribute("disabled", "disabled");
        op_3.setAttribute("disabled", "disabled");
        // op_4.setAttribute("disabled","disabled");  
    }


    if (i >= 2) {
        document.querySelector(".complete").style.display = "block"
    }
}

function addingNew() {
    document.querySelector("#ques").style.display = "block";
    document.querySelector(".number").textContent = i + 1;
    document.querySelector(".nextQues").style.display = "block";
    document.querySelector(".newQues").style.display = "none";
    document.querySelector(".Option1").value = "";
    document.querySelector(".Option2").value = "";
    document.querySelector(".Option3").value = "";
    document.querySelector(".Option4").value = "";
    document.querySelector(`.textarea1`).value = "";
    a_right.removeAttribute("checked", "checked");
    b_right.removeAttribute("checked", "checked");
    c_right.removeAttribute("checked", "checked");
    d_right.removeAttribute("checked", "checked");
}
document.querySelector(".complete").addEventListener("click", () => {

    document.querySelector(".done").classList.add("done1");
    document.querySelector(".done1").style.visibility = "visible";

});
document.querySelector(".yes").addEventListener("click", () => {
    localStorage.setItem("quiz", document.querySelector(".questions").innerHTML);
    document.querySelector(".done1").style.visibility = "hidden";
    document.querySelector(".questions").innerHTML = "";
    i = 0;
    addingNew();
})
document.querySelector(".no").addEventListener("click", () => {

    document.querySelector(".done1").classList.add("done");
    document.querySelector(".done1").style.visibility = "hidden";
});
export {i};