let score = {wins:0,loses:0,ties:0};
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const popUp = document.getElementById("img");
rock.disabled = true;
paper.disabled = true;
scissors.disabled = true;

/*rock is 0
  paper is 1
  scissors is 2*/

const imgFetch = async() => {
    try{
        const response = await fetch("https://random-d.uk/api/random");
        const image = await response.json();
        document.getElementById("img").src = image.url;
    }
    catch(error){
        console.log(error)
    }
}

const tieFunction = () => {
    score.ties += 1;
    document.getElementById("score").innerHTML = `Wins ${score.wins}, loses ${score.loses}, ties ${score.ties}`;
    document.getElementById("img").className = "disabled";
}

const loseFunction = () => {
    score.loses +=1;
    document.getElementById("score").innerHTML = `Wins ${score.wins}, loses ${score.loses}, ties ${score.ties}`;
    document.getElementById("img").className = "disabled";
}

const winFunction = () => {
    score.wins +=1;
    document.getElementById("score").innerHTML = `Wins ${score.wins}, loses ${score.loses}, ties ${score.ties}`;
    imgFetch()
    document.getElementById("img").className = "enabled";
}

const rockFunction = () => {
    const random = Math.floor(Math.random()*3)
    if(random === 0){
        tieFunction();
    }else if (random === 1){
        loseFunction();
    }else{
        winFunction();
    }
}

const paperFunction = () => {
    const random = Math.floor(Math.random()*3)
    if(random === 0){
        winFunction();
    }else if (random === 1){
        tieFunction();
    }else{
        loseFunction();
    }
}

const scissorsFunction = () => {
    const random = Math.floor(Math.random()*3)
    if(random === 0){
        loseFunction();
    }else if (random === 1){
        winFunction();
    }else{
        tieFunction();
    }
}

const playFunction = () =>{
    document.getElementById("play").className = "disabled";
    document.getElementById("stop").className = "enabled";
    document.getElementById("subHeading").innerHTML = "Player Score";
    document.getElementById("score").className = "enabled";
    document.getElementById("score").innerHTML = `Wins ${score.wins}, loses ${score.loses}, ties ${score.ties}`;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
};

const stopFunction = () =>{
    document.getElementById("play").className = "enabled";
    document.getElementById("stop").className = "disabled";
    document.getElementById("subHeading").innerHTML = "Click play to start game, then pick rock, paper or scissors";
    document.getElementById("score").className = "disabled";
    document.getElementById("img").className = "disabled";
    score.loses=0;
    score.wins=0;
    score.ties=0;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
};

const play = document.getElementById("play")
play.addEventListener("click", playFunction);

const stap = document.getElementById("stop")
stap.addEventListener("click", stopFunction);

rock.addEventListener("click", rockFunction);
paper.addEventListener("click", paperFunction);
scissors.addEventListener("click", scissorsFunction);