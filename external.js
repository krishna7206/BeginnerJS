function getComputerChoice()
{
    var choice = ["Rock","Paper","Scissors"]
    return choice[Math.floor(Math.random()*choice.length)]
}

function disable()
{
    button.forEach(elem=>{
        elem.disabled = true
    })
}





function playGame(play)
{   
    let player = play;
    let computer = getComputerChoice();
    
    if(player == "Rock" && computer == "Scissors" || player == 'Scissors' && computer == 'Paper' || player == 'Paper' && computer == 'Rock')
    {
     
        
     playerScore+=1
     result = "you win with player score "+ playerScore +" computer score "+ComputerScore
    
    if(playerScore == 5)
    {
        result+= " player wins"
        disable()
    }
    }
    else if(player == computer)
    {
      result = "Tie with player score "+playerScore+" computer score "+ComputerScore
    }   
    else
    {
        ComputerScore+=1
        result = "You Lose with score "+ ComputerScore +"player score "+playerScore
        
    
       if(ComputerScore == 5)
       {
        result += " computer wins"
        disable()
       }
    }
    document.getElementById('result').innerHTML = result
 
 }



let playerScore = 0;
let ComputerScore = 0;
const button = document.querySelectorAll('input');
     button.forEach((button) => {
        button.addEventListener('click',function()  {
            
            playGame(button.value);

        });   
});

