import React from 'react'
import {useState} from 'react'
import './Counter.css'

const Counter = props => {
    const [number, setNumber] = useState(0)
    
    const decrease = props => {
        setNumber(number-1)
    }

    const restart = props => {
        setNumber(0)
    }

    const increase = props => {
        setNumber(number + 1)
    }

    return(
        <div className="counter">
            <div className="title">
                <h1>Contador</h1>
            </div>
            <div className="contador">
                <h3>{number}</h3>
                <div className="buttons">
                    <button onClick={decrease}>-1</button>
                    <button onClick={restart}>0</button>
                    <button onClick={increase}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;