let head = document.querySelector(".heading");
let user = "x";
let tetraInputText = [];
let backStep = [];
let newGame = document.querySelector(".new");
let back = document.querySelector(".back")




function winner() {
    for (let i = 1; i < 10; i++) {
        tetraInputText[i] = document.getElementById(`item${i}`).innerHTML;
    }
    if (tetraInputText[1] === tetraInputText[2] && tetraInputText[2]===tetraInputText[3] && tetraInputText[1] !='') {
        end(1,2,3)
        
    } else if (tetraInputText[4]===tetraInputText[5]&&tetraInputText[5]===tetraInputText[6]&&tetraInputText[4]!='') {
        end(4,5,6)
    } else if (tetraInputText[7]===tetraInputText[8]&&tetraInputText[8]===tetraInputText[9]&&tetraInputText[7]!='') {
        end(7,8,9)
    } else if (tetraInputText[1]===tetraInputText[4]&&tetraInputText[4]===tetraInputText[7]&&tetraInputText[7]!='') {
        end(1,4,7)
    } else if (tetraInputText[2]===tetraInputText[5]&&tetraInputText[5]===tetraInputText[8]&&tetraInputText[2]!='') {
        end(2,5,8)
    } else if (tetraInputText[3]===tetraInputText[6]&&tetraInputText[6]===tetraInputText[9]&&tetraInputText[3]!='') {
        end(3,6,9)
    } else if (tetraInputText[1]===tetraInputText[5]&&tetraInputText[5]===tetraInputText[9]&&tetraInputText[1]!='') {
        end(1,5,9)
    } else if (tetraInputText[3]===tetraInputText[5]&&tetraInputText[5]===tetraInputText[7]&&tetraInputText[3]!='') {
        end(3,5,7)
    } else if (
            tetraInputText[1] &&
            tetraInputText[2] &&
            tetraInputText[3] &&
            tetraInputText[4] &&
            tetraInputText[5] &&
            tetraInputText[6] &&
            tetraInputText[7] &&
            tetraInputText[8] &&
            tetraInputText[9]
        ){
            head.innerHTML = "wait"
            setInterval(()=> {
                head.innerHTML += "."
            },1000);
            setTimeout(()=>{
                location.reload();
            }, 2000)
    };
};


function game(id) {
    let e = document.getElementById(id);
    if(user === "x" && e.innerHTML === "") {
        e.innerHTML = "x"
        user = "o"
        head.innerHTML = user

    }else if (user === "o" && e.innerHTML === "") {
        e.innerHTML = "o"
        user = "x"
        head.innerHTML = user
    };
    backStep.push(e);
    back.onclick = ()=>{
       clearElement();
    };
    winner();
};


function end(num1 , num2 , num3) {
    head.innerHTML = `${tetraInputText[num1]} winnwer`
    document.getElementById("item"+ num1).style.background = "#000"
    document.getElementById("item"+ num2).style.background = "#000"
    document.getElementById("item"+ num3).style.background = "#000"
    setInterval(()=> {
        head.innerHTML += "."
    },1000);
    setTimeout(()=>{
        location.reload();
    }, 3500);
    document.querySelectorAll(".container div").forEach((div)=>{
        div.classList.add("disabled");
    })
};



newGame.addEventListener("click" , ()=>{
    location.reload();
});

function clearElement() {
    if (user === "x") {
        user = "o"
        head.innerHTML = user;
    }else if (user === "o") {
        user = "x"
        head.innerHTML = user;
    };
    backStep.forEach(()=>{
        backStep[backStep.length - 1].innerHTML= "";
    });
    backStep.pop();
};






