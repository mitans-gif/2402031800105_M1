let gamesequence = [];
let usersequence = [];

let btns = ["blue", "green", "yellow", "saffron"];

let started = false;
let level = 0;

let title = document.querySelector(".level");

document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}
function userflash(btn) {
    btn.classList.add("userflash");

    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
}

function levelup() {
    usersequence=[];
    level++;
    title.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);

    gamesequence.push(randomcolor);
    console.log(gamesequence);
    gameflash(randombtn);
}
function checkans(idx){
    if(usersequence[idx]===gamesequence[idx]){
        if(usersequence.length==gamesequence.length){
           setTimeout(levelup,1000);
        }
        console.log("same value");
    }else{
        console.log("clicked wrong button");
        title.innerHTML=`Game Over!Your Score was <b>${level}</b> <br>         Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    console.log(this);
    let btn =this;
   userflash(btn);

   let usercolor=btn.getAttribute("id");
   usersequence.push(usercolor);
   checkans(usersequence.length-1);
}
let allbtn=document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gamesequence=[];
    usersequence=[];
    level=0;
}