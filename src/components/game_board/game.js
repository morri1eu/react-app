import React from "react"
import Characters from "../../Characters"
import ScoreBar from "../score_bar/ScoreBar"
import Jumbotron from "../Jumbotron";

class Game extends React.Component {
    state = {
        clicked: [],
        score: 0,
        max_score: 0
    }
         componentDidMount(){
            this.startGame()
         }
    handleIncrement = () => {
        this.setState({ score: this.state.score + 1 })
    }

    startGame = () => (
        this.setState({ score: 0 })

    )

    handleClick = (characterName) => {
        console.log(this.state.clicked.indexOf(characterName))
        if (this.state.clicked.indexOf(characterName) >= 0) {

            if (this.state.max_score < this.state.score) {
                this.setState({ max_score: this.state.score })
            }
            else{}
            this.startGame()
            this.setState({clicked:[]})
        }
        else {
            console.log(this.state)
            this.handleIncrement()
            setTimeout(()=>{
            if (this.state.max_score <= this.state.score) {
                this.setState({ max_score: this.state.score })
            }}, 10)
            this.setState({ clicked: [...this.state.clicked, characterName] })
            this.populatePage()

        }
    }

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    populatePage = () => {
        this.shuffle(Characters)
        return <div className="container">
            {Characters.map(character => {
                return <img src={character.picture} alt={character.name} key={character.name} onClick={() => this.handleClick(character.name)} className="col-md-3 img-fluid" />
            })
            }
        </div>
    }



    render() {
       return <div>
            <ScoreBar score={this.state.score} max_score={this.state.max_score} />
            <Jumbotron />
            <this.populatePage />
        </div>


    }
}

export default Game