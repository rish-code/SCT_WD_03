let di = document.querySelector(".game");
let restbtn = document.querySelectorAll(".reset");
let turn0=true;
let winner= document.querySelector(".winner");
let result= document.querySelector(".result");
let winning =[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let boxes = di.children;
let count=0;
for ( let box of boxes){
    box.onclick=()=>{
        if(turn0){
            box.innerText="O";
            turn0 =false;
            win();

            
        }
        else{
            box.innerText="X";
            turn0 =true;
            win();

        }
        box.disabled=true;
        count++;
        console.log(count);
        if(count==9){
            winner.innerText=`OOPs ! This game ends in a draw`;
                result.style.display="block";
                di.style.visibility="hidden";
                restbtn[1].style.visibility="hidden";
        }
        
    }
}
function win(){
    for(let pattern of winning){
        let a =boxes[pattern[0]].innerText; 
        let b=boxes[pattern[1]].innerText; 
        let c=boxes[pattern[2]].innerText; 
        if (a!="" && b!="" && c!="")  {
            if(a===b && b===c){
                winner.innerText=`Congratulations ! winner is ${a}`;
                result.style.display="block";
                di.style.visibility="hidden";
                restbtn[1].style.visibility="hidden";
                
                for (let box of boxes){
                    box.disabled=true;
                }
            }
        }  
    }
}
function reset() {
    for( let box of boxes ){
        box.disabled=false;
        box.innerText="";
    }
}
restbtn[0].onclick=()=>{
    reset();
    result.style.display="none";
    di.style.visibility="visible";
    restbtn[1].style.visibility="visible";
    turn0=true;
    count=0;


}
restbtn[1].onclick=()=>{
    reset();
    turn0=true;
    count=0;
    
}