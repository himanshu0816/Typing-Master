window.addEventListener('load',init)
//LEVELS OF GAMES
const levels={
    easy:5,
    medium:3,
    hard:1,
};
//TO change level
const currentLevel =levels.easy;
//Global Variables
let time=currentLevel;
let score=0;
let isPlaying;//bool varibale
//DOM Elements
const wordInput= document.querySelector("#word-input")
const currentWord= document.querySelector("#current-word")
const scoreDisplay= document.querySelector("#score")
const timeDisplay= document.querySelector("#time")
const message= document.querySelector("#message")

//Making an  of words array
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];
    // console.log(words[10])
    function init()
    {
        //when pages loads new words comes from array word
        showWord(words)
        wordInput.addEventListener('input',startMatch)
        setInterval(countdown,1000)
        setInterval(checkStatus,50)
    }
    function checkStatus(){
        if(!isPlaying && time ==0){
            console.log("Hello World!!!")
        message.innerHTML="GAME OVER!!";
        }
    }
    function countdown(){
        if(time>0){
            time--;
        }else if(time==0){
            time=0;
            isPlaying= false;
        }
        timeDisplay.innerHTML=time;
    }
    function showWord(words){
        const randomIndex=Math.floor(Math.random()*words.length);
        // console.log(words[randomIndex])
        currentWord.innerHTML=words[randomIndex];
    }
    function startMatch(){
        if(matchWords()){
            wordInput.value="";
            isPlaying=true
            showWord(words)
            time=currentLevel+1;
            score++;
        }
        scoreDisplay.innerHTML=score;
    }
    function matchWords()
    {
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML="Correct !!"
            return true;
        }
        else{
            message.innerHTML="Incorrect !!"
            return false;
        }
    }