

let secretNumber=Math.trunc(Math.random()*20)
let score=20;
console.log(secretNumber)


document.querySelector('.btn-check').addEventListener('click',()=>
{
    
    const guess =Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)
    if(!guess){
        displayMessage('there is no value !')
        
    } else if (guess===secretNumber)
    {
       score++
       Anwser()
       document.querySelector('.message').textContent='you guess !!!'
       document.querySelector('body').style.backgroundColor='green'
       document.querySelector('.number').textContent = `${guess}`

       if(score>Number(document.querySelector('.highscore').textContent)){
           document.querySelector('.highscore').textContent=score
       }
    }
    else if (guess !== secretNumber){
        displayMessage(guess > secretNumber ? 'the value is too high !' : 'the value is too low')
        if(score>0){
            score--
            Anwser()
            }
    }
    })


let Anwser = () => {
document.querySelector('.score').textContent=score
}

document.querySelector('.btn-again').addEventListener('click', () => {
 restart()
})

let restart = function(){
    secretNumber=Math.trunc(Math.random()*20)
    document.querySelector('.score').textContent = 20
    displayMessage('Start guessing...')
    if(document.querySelector('body').style.backgroundColor === 'green')
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
}

const displayMessage = (message) => {
    document.querySelector('.message').textContent=message
}