const game = document.querySelector('#game')
const newGame = document.querySelector('#newGame')

const startGame = ()=>{
    newGame.addEventListener('click', ()=>{
        reallyGame()
        game.classList.toggle('d-none')
        newGame.classList.toggle('d-none')
    })
}

const makeHashWord = (length)=>{
    hashedWord = document.querySelector('#hashedWord')
    for(var i = 0;i<length;i++){
        element = document.createElement('button')
        element.classList='btn btn-primary'
        element.innerText= '-'
        hashedWord.appendChild(element)
    }
}
const reallyGame=()=>{
    getApiWord((data,err)=>{
        if(err) console.log(err)
        else{
            word = document.querySelector('#word')
            alphabet = document.querySelectorAll('#alphabet')
            h1 = new HangMan(data)
            word.innerHTML = `<h3>word : ${data}</h3> <h4>Score: ${h1.score} - remaining guses: ${h1.remainingGuses} - game status: ${h1.gameStatus}</h4>`
            console.log(h1)
            alphabet.forEach(button=>{
                button.addEventListener('click', (e)=>{
                console.log(button.innerText.toLowerCase().split(''))
                h1.makeGuess(button.innerText.toLowerCase().split(''))
                button.classList.add('d-none')
                console.log(h1)
                word.innerHTML = `<h3>word : ${data}</h3> <h4>Score: ${h1.score} - remaining guses: ${h1.remainingGuses} - game status: ${h1.gameStatus}</h4>`
            })})
            makeHashWord(data.length)
        }
    })
}
startGame()






