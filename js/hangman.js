class HangMan{
    constructor(word){
        this.word = word.toLowerCase().split('')
        this.initWord = this.word
        console.log(this.word)
        this.remainingGuses = word.length + 3
        this.gusses = []
        this.score =0
        this.gameStatus = 'still playing'
    }
    makeGuess(c){
        let l1 = this.word.length
        this.word = this.word.filter(w=>{
                return w != c
        })
        if(this.gameStatus=='still playing'){
            let l2 = this.word.length
            if(l1==l2){
                this.remainingGuses-=1
                if(this.remainingGuses == 0) {
                    this.gameStatus = "loser"
                    this.reloadWindow('lose')
                }

            }
            else {
                let indexes = this.initWord.map((elm, idx) => elm == c ? idx : '').filter(String)
                indexes.forEach(ind=>{
                    let hashedWord = document.getElementById('hashedWord')
                    let divs = hashedWord.getElementsByTagName('*')
                    divs[ind].innerText=c
                })
                this.score+=(l1-l2)
                if(this.word.length==0) {
                    this.gameStatus="win"
                    this.reloadWindow('win')
                }
            }
        }
        
    }
    reloadWindow(status){
        setTimeout(function(){
            if(status=="win") {
                alert(`WON!`)
            }
            else if (status=="lose") {
                alert(`Game Over!`)
            }
            location.reload()
        }, 200)
    }
}