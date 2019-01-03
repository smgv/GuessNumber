<p>Guess the Number Between 1 to 100 in max 10 chances
otherwise you will loose the Game</p><br>
Enter the Number : <input type="text" class="guess"> 
<button class="submit">submit</button>
<div class="para">
<p class="lastResult"></p>
<p class="lh"></p>
<p class="result"></p>
</div>

<script>

let actualNum = Math.floor(Math.random() * 100) + 1;
let count = 1;
let resetButton;

const lastresult = document.querySelector(".lastresult");
const lh = document.querySelector(".lh");
const result = document.querySelector(".result");
const submit = document.querySelector(".submit");
const guesses = document.querySelector(".guess");

function checkGuess(){

	let userGuess = Number(guesses.value);
    if(count === 1){
    lastresult.textContent = "Previous Guess : ";
    lastresult.style.background= "red";
    lastresult.style.color = "white";
    lastresult.style.fontSize = "25px";
    lastresult.style.padding = "15px";
    }
	lastresult.textContent += userGuess + " " ;
    
    
    if(userGuess === actualNum){
    	result.textContent = "Congratulations!!!!! Yo Won the Game";
        result.style.background = "green";
        result.style.color = "white";
        lastresult.style.fontSize = "25px";
    	lastresult.style.padding = "15px";
        setGameOver();
    }
    else if(count === 10){
    	result.textContent = "Game Over!! You Loose the Game";
        result.style.background = "orange";
        result.style.color = "white";
        setGameOver();
    }
    else{
    	if(userGuess < actualNum)
		{
        result.textContent = "too low";
        result.style.background ="blue"
        result.style.color = "white";
		result.style.fontSize = "25px";
    	result.style.padding = "15px";
        }
        else if(userGuess > actualNum)
        {
        result.textContent = "too high";
        result.style.background = "blue";
        result.style.color = "white";
        result.style.fontSize = "25px";
    	result.style.padding = "15px";
        }
   }
    count++;
    guesses.value = " ";
    guesses.focus();
}


submit.addEventListener("click", checkGuess);

function setGameOver() {
	guesses.disabled = true;
  	submit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
	count = 1;
    const paras = document.querySelectorAll(".para p");
    
    for(var i=0; i<paras.length; i++){
		paras[i].textContent = "";
        paras[i].style.background = "white";
	}
    
    resetButton.parentNode.removeChild(resetButton);
    guesses.disabled = false;
  	submit.disabled = false;
    guesses.value = " ";
    guesses.focus();
    let actualNum = Math.floor(Math.random() * 100) + 1;
}


</script>
273435