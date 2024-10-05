let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(element =>{
    element.innerHTML = "";
    element.addEventListener("click",()=>{
        if(!isGameOver && element.innerHTML === ""){
            element.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn ==="X"){
        turn = "O";
        document.querySelector(".background").style.left = "85px";
    }
    else{
        turn = "X";
        document.querySelector(".background").style.left = '0';
    }
}

function checkWin(){
    let WinConditions =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0; i<WinConditions.length;i++){
        let v0 = boxes[WinConditions[i][0]].innerHTML;
        let v1 = boxes[WinConditions[i][1]].innerHTML;
        let v2 = boxes[WinConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            
            document.querySelector("#result").innerHTML = turn + " Win";
            document.querySelector("#play-again").style.display = "inline";

            for(j=0 ; j<3; j++){
                boxes[WinConditions[i][j]].style.backgroundColor = "#ff2e63";
                boxes[WinConditions[i][j]].style.color = "#000";
                
            }
        }
    }
}


function checkDraw(){
        if(!isGameOver){
            let isDraw = true;
            boxes.forEach(element =>{
                if(element.innerHTML ==="") isDraw = false;
            })

            if(isDraw){
                isGameOver = true;
                document.querySelector("#result").innerHTML = "Draw";
                document.querySelector("#play-again").style.display = "inline";
            }
        }

}

document.querySelector("#play-again").addEventListener("click",()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".background").style.left = "0";
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(element =>{
        element.innerHTML = "";
        element.style.removeProperty("background-color");
        element.style.color = "#fff";
    })
});

