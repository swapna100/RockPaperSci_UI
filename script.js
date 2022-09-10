let userScore = 0; //user score
let compScore = 0;  //computer score
let message ='';     //result from each round 
// function containing the selection of computer


function computerPlay()
    {
        let items = ['Rock', 'Paper', 'Scissors'];
        let compChoice = items[Math.floor(Math.random()* items.length)];
        return compChoice; //return the selection of the computer.
    }
//function that user plays with computer

  
function playRound(playerSelection, computerSelection)
    {  

        if((playerSelection == 'PAPER')&&(computerSelection =='ROCK')||
        (playerSelection == 'ROCK')&&(computerSelection =='SCISSORS')||
        (playerSelection == 'SCISSORS')&&(computerSelection =='PAPER'))
        {
            message = ` You Win!! ${playerSelection} beats ${computerSelection} `;
            document.getElementById('message').innerHTML = message;
            userScore += 1;
            document.getElementById('userscore').innerHTML = " Your Score: "+userScore;
            document.getElementById('comscore').innerHTML = " Computer Score: " +compScore;

            //return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
        }
        else if((playerSelection =='ROCK') && (computerSelection == 'PAPER')||
            (playerSelection == 'SCISSORS')&&(computerSelection =='ROCK')||
            (playerSelection == 'PAPER')&&(computerSelection =='SCISSORS'))
        {
            message = ` You loose!! ${computerSelection} beats ${playerSelection} `;
            document.getElementById('message').innerHTML = message;
            compScore += 1;
            document.getElementById('userscore').innerHTML = " Your Score: "+userScore;
            document.getElementById('comscore').innerHTML = " Computer Score: " +compScore;
           // return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
        }
        else if((playerSelection == 'PAPER')&&(computerSelection =='PAPER')||
        (playerSelection == 'ROCK')&&(computerSelection =='ROCK')||
        (playerSelection == 'SCISSORS')&&(computerSelection =='SCISSORS'))
        {
            //else it is a tie
            message = "It's a Tie!";
            document.getElementById('message').innerHTML = message;
            document.getElementById('userscore').innerHTML = " Your Score: "+userScore;
            document.getElementById('comscore').innerHTML = " Computer Score: " +compScore;
            //return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
        } 
    
    }
   

function game()
    {  
        //document.getElementById('winnermsg').innerText = " ";
       
        const btnrock = document.getElementById('rockbtn');
        btnrock.addEventListener('click', rockSelect, true);

        const btnpaper = document.getElementById('paperbtn');
        btnpaper.addEventListener('click', paperSelect, true);

        const btnscissors = document.getElementById('scissorsbtn');
        btnscissors.addEventListener('click',scissorsSelect , true)
        

        function rockSelect()
          //document.getElementById('winnermsg').innerHTML = " ";
        {   let computerSelection = computerPlay(); 
            computerSelection = computerSelection.toUpperCase(); 
            let playerSelection = 'ROCK';
            console.log('ROCK');
            
            playRound(playerSelection, computerSelection);
           
            //console.log(play);
            //document.getElementById
            if (userScore == 5 || compScore == 5)
            {
                winner(userScore, compScore);
               userScore = 0;
               compScore = 0;
            }
        }

            function paperSelect()
            {   let computerSelection = computerPlay(); 
                computerSelection = computerSelection.toUpperCase(); 
                let playerSelection = 'PAPER';
                //console.log('PAPER');
                playRound(playerSelection, computerSelection);
                //console.log(play);
                if (userScore === 5 || compScore === 5){
                    winner(userScore, compScore);
                   userScore = 0;
                   compScore = 0;
                    
                    
                    
                }
                
            }

            function scissorsSelect()
            {   let computerSelection = computerPlay();
                computerSelection = computerSelection.toUpperCase();
                let playerSelection = "SCISSORS";
                console.log('SCISSORS');
                playRound(playerSelection, computerSelection);
                //console.log(play);
                if (userScore === 5 || compScore === 5){
                    winner(userScore, compScore);
                    userScore = 0;
                    compScore = 0;
                

                    
                    
                }
                
            }

}



function winner(userScore, compScore){
    if (userScore > compScore)
        {
           // console.log(" You are the Winner! with total score: "+userScore);
            document.getElementById('winnermsg').innerHTML = " You are the Winner! ";
          
        }
       else if(userScore == compScore)
        {
            //console.log("Both of your scores are same!! Computer score: "+compScore +" equals to Player score: "+ userScore);
            document.getElementById('winnermsg').innerHTML = " Both scores are same! ";
            playorQuit();
          
        } 
        else if(userScore < compScore)
        {     //console.log(" Computer is the Winner! with total score: "+compScore);
            document.getElementById('winnermsg').innerHTML = " Computer is the Winner! "
           
        } 
       

    }
    
    /* function playorQuit(){
       
            userScore = 0;
            compScore = 0;
            var proceed = confirm("Are you sure you want to proceed?");
            if (proceed)
             {
            var msg_winner = document.getElementById('winnermsg');
            var displaySettings = msg_winner.style.display;
            displaySettings.style.display = 'none';
            game();
             }
            else 
            {
                //exit
               exit();
  
            }
           } */
        
 

game();





