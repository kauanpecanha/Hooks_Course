import React from "react";
import { useState, useEffect } from 'react'
import './Rectangle.css'

function calculus(base, height){
    if(base === 0) return "Base de medida inválida"
    if(height === 0) return "Altura de medida inválida"
    if(base<0) return "Base de medida negativa"
    if(height<0) return "Altura de medida negativa"
    return((base*height)/2)
}


const Retangulo = props => {
    const [area, setArea] = useState(0)
    const [base, setBase] = useState(0)
    const [height, setHeight] = useState(0)
    
    useEffect(function(){
        setArea(calculus(base, height))
    }, [base, height])
    
    return(
        <div className="retangulo">
            <div className="title">
                <h1>Retângulo</h1>
            </div>
            <div className="inputs">
                <h3>Área do Retângulo: {area}</h3>
                <div className="input">
                    <p>Base:</p>
                    <input type={"number"} value={base} onChange={e => setBase(e.target.value)}></input>
                </div>
                <div className="input">
                    <p>Altura:</p>
                    <input type={"number"} value={height} onChange={e => setHeight(e.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

export default Retangulo;