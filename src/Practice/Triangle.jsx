import React from "react"
import { useState, useEffect } from "react"
// testing area

function calculateArea(base, height){
    const b = parseFloat(base);
    const h = parseFloat(height);

    if((b === 0) && (h === 0)) return "Ambos os valores da altura e base são inválidos"
    if(b === 0) return "Valor da base inválido"
    if(h === 0) return "Valor da altura inválido"

    return ((b*h)/2)
}


const Triangle = props => {
    const [base, setBase] = useState(0)
    const [height, setHeight] = useState(0)
    const [area, setArea] = useState(0)


    useEffect(function(){
        setArea(calculateArea(base, height))
    }, [base, height])
    return(
        <div className="test">

            <div className="triangle">
                <h2>This react code was created in order to calculate the triangle area.</h2>

                <h3>Triangle area:{area}</h3>
                <div className="inputs">
                    <input type={"number"} value={base} onChange={e => setBase(e.target.value)}></input>
                    <input type={"number"} value={height} onChange={e => setHeight(e.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

export default Triangle;