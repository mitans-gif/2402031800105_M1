let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#comp-score");

const compchoice=()=>{
    //rock,paper,scissor
    const option=["rock","paper","scissor"];
    const randomind=Math.floor(Math.random()*3);
    return option[randomind];
};
const drawgame=()=>{
          msg.innerText="Game is Draw.Play Again";
            msg.style.backgroundColor="#484D6D";
};

const showwinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){
        userscore++;

        userscorepara.innerText=userscore;
        msg.innerText=`you win! ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
              msg.innerText=`you loss! ${computerchoice} beats your ${userchoice}`;
                msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    //generate computer choice;
    const computerchoice=compchoice();
    console.log("computer choice=",computerchoice);

    if(userchoice==computerchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=computerchoice==="paper" ? false : true;
        }else if(userchoice=="paper"){
            userwin=computerchoice=="scissor" ? false : true;
        }else{
            userwin=computerchoice==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,computerchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});