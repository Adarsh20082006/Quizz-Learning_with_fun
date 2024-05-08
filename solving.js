document.body.innerHTML = localStorage.getItem("quiz");
// import * as i from "/creating.js"

let answer = "";
let par = document.querySelectorAll("p");

let parLen = document.querySelectorAll("p").length;
for (let n = 0; n < parLen; n++) {
    if (par[n].querySelectorAll("[type='radio']")[0].checked) {
        answer += 0;
    }
    else if (par[n].querySelectorAll("[type='radio']")[1].checked) {
        answer += 1;
    }
    else if (par[n].querySelectorAll("[type='radio']")[2].checked) {
        answer += 2;
    }
    else if (par[n].querySelectorAll("[type='radio']")[3].checked) {
        answer += 3;
    }

} console.log(answer);
let num="";
let spans = document.querySelectorAll("p span")
let radio = document.querySelectorAll("p input[type='radio']");
let radLen = document.querySelectorAll("p input[type='radio']").length;
for (let m = 0; m <= radLen - 1; m++) {
    radio[m].removeAttribute("disabled");
    radio[m].removeAttribute("checked");
} console.log(document.querySelectorAll("p")[0].children)
let final = 0;
for (let j = 0; j < parLen; j++) {
    for (let k = 0; k < radLen; k++) {
        radio[k].addEventListener("click", () => {
            console.log(num)
            if (document.querySelectorAll("p")[j].children[1].checked) {


                document.querySelectorAll("p")[j].children[3].setAttribute("disabled", "disabled")
                document.querySelectorAll("p")[j].children[5].setAttribute("disabled", "disabled")
                document.querySelectorAll("p")[j].children[7].setAttribute("disabled", "disabled")
                if (answer[j] == 0) {
                    document.querySelectorAll("p")[j].children[2].style.color = "rgba(172, 255, 47, 0.868)";
                    // radio[k].style.color
                    final = 2
                } else if (answer[j] == 1) {
                    document.querySelectorAll("p")[j].children[4].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 4
                } else if (answer[j] == 2) {
                    document.querySelectorAll("p")[j].children[6].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 6
                }
                else if (answer[j] == 3) {
                    document.querySelectorAll("p")[j].children[8].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 8
                } num += k;
                if (spans[num[j]].textContent != document.querySelectorAll("p")[j].children[final].textContent) {
                    document.querySelectorAll("p")[j].children[2].style.color = "red"
                }
            }
            else if (document.querySelectorAll("p")[j].children[3].checked) {

                document.querySelectorAll("p")[j].children[1].setAttribute("disabled", "disabled")
                document.querySelectorAll("p")[j].children[5].setAttribute("disabled", "disabled")
                document.querySelectorAll("p")[j].children[7].setAttribute("disabled", "disabled")
                if (answer[j] == 0) {
                    document.querySelectorAll("p")[j].children[2].style.color = "rgba(172, 255, 47, 0.868)";
                    // radio[k].style.color
                    final = 2
                } else if (answer[j] == 1) {
                    document.querySelectorAll("p")[j].children[4].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 4
                } else if (answer[j] == 2) {
                    document.querySelectorAll("p")[j].children[6].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 6
                }
                else if (answer[j] == 3) {
                    document.querySelectorAll("p")[j].children[8].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 8
                } num += k;
                if (spans[num[j]].textContent != document.querySelectorAll("p")[j].children[final].textContent) {
                    document.querySelectorAll("p")[j].children[4].style.color = "red"
                }
            }
            else if (document.querySelectorAll("p")[j].children[5].checked) {

                document.querySelectorAll("p")[j].children[3].setAttribute("disabled", "disabled")
                document.querySelectorAll("p")[j].children[1].setAttribute("disabled", "disabled")
                document.querySelectorAll("p")[j].children[7].setAttribute("disabled", "disabled")
                if (answer[j] == 0) {
                    document.querySelectorAll("p")[j].children[2].style.color = "rgba(172, 255, 47, 0.868)";
                    // radio[k].style.color
                    final = 2
                } else if (answer[j] == 1) {
                    document.querySelectorAll("p")[j].children[4].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 4
                } else if (answer[j] == 2) {
                    document.querySelectorAll("p")[j].children[6].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 6
                }
                else if (answer[j] == 3) {
                    document.querySelectorAll("p")[j].children[8].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 8
                } num += k;
                if (spans[num[j]].textContent !== document.querySelectorAll("p")[j].children[final].textContent) {
                    document.querySelectorAll("p")[j].children[6].style.color = "red"
                }
            }
            else if (document.querySelectorAll("p")[j].children[7].checked) {

                document.querySelectorAll("p")[j].children[3].setAttribute("disabled", "disabled")
                document.querySelectorAll("p")[j].children[5].setAttribute("disabled", "disabled")
                document.querySelectorAll("p")[j].children[1].setAttribute("disabled", "disabled")
                if (answer[j] == 0) {
                    document.querySelectorAll("p")[j].children[2].style.color = "rgba(172, 255, 47, 0.868)";
                    // radio[k].style.color
                    final = 2
                } else if (answer[j] == 1) {
                    document.querySelectorAll("p")[j].children[4].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 4
                } else if (answer[j] == 2) {
                    document.querySelectorAll("p")[j].children[6].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 6
                }
                else if (answer[j] == 3) {
                    document.querySelectorAll("p")[j].children[8].style.color = "rgba(172, 255, 47, 0.868)";
                    final = 8
                } num += k;
                if (spans[num[j]].textContent != document.querySelectorAll("p")[j].children[final].textContent) {
                    document.querySelectorAll("p")[j].children[8].style.color = "red"
                }
            }




        })
    }
}