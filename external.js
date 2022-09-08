function getComputerChoice()
{
    var choice = ["Rock","Paper","Scissors"]
    return choice[Math.floor(Math.random()*choice.length)]
}



function singleRound(playerSelection,ComputerSelection)
{
   let player = playerSelection
   let computer = ComputerSelection
   if(player == "Rock" && computer == "Scissors" || player == 'Scissors' && computer == 'Paper' || player == 'Paper' && computer == 'Rock')
   {
    return "You Win"
   }
   if(player == computer)
   {
    return "Tie"
   }   
   else
   {
    return "You Lose"
   }

}


function multipleRound()
{   
    let player_win=0;
    let comp_win=0;
    for(let i=0;i<5;i++){
        let play = prompt('Enter your String of choice(Rock,Paper and Scissor')
        let comp = getComputerChoice();
        if( singleRound(play,comp) == "You Win")
        {
            player_win = player_win+1
            console.log("Player Win")
        }
        else{
            comp_win = comp_win + 1
            console.log("Player Loss")
        }


    }
    if (player_win > comp_win)
    {
       console.log("Player Wins all")
    }
    else{
        console.log("Comp Wins")
    }
}

multipleRound()