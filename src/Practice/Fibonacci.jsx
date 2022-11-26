import React from 'react'
import { useEffect, useState } from 'react'
import './Fibonacci.css'

function fibo(num){
    const n = parseInt(num)
    if (n<0) return "Número Inválido"
    if (n === 0) return 1
    if (n === 1) return 1
    return fibo(n-1) + fibo(n-2)
}

const Fibonacci = props => {
    const [number, setNumber] = useState(0);
    const [fibonacci, setFibo] = useState(1);

    useEffect(function(){
        setFibo(fibo(number))
    }, [number])
    
    return(
        <div className="colateral">
            <div className="title">
                <h1>Sequência de Fibonacci</h1>
                <h2>Feita com useState e useEffect</h2>
            </div>
            <div className="inputs">
                <h3>Número de Fibonacci na posição {number}: {fibonacci}</h3>
                <input type = "number" value = {number} onChange = {e => setNumber(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Fibonacci;