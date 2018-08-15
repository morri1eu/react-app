import React from "react"

const ScoreBar = (props)=>(
        <div>
            <nav>
                <h4>Clicky Game</h4>
                <h5>Score: {props.score}</h5>
                <h5>Max Score: {props.max_score}</h5>
            </nav>
        </div>
)
    

export default ScoreBar