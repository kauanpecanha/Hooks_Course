import React from "react";
import { useState } from 'react'

const Usestate = props => {
    const [name, setName] = useState("Matheus");
    const [number, setNumber] = useState(1)

    const [nome, setNome] = useState("Kauan");

    const changeNumber = props =>  {
        setNumber(number+10)
    }

    const changeName = props => {
        setName("Kauan")
    }


    return(
        <div className="app">
            <div className="nome">
                <h4>Meu nome é: {[name]}</h4>
                <button onClick={changeName}>Mudar Nome</button>
            </div>

            <div className="number">
                <h4>O número é: {number}</h4>
                <button onClick={changeNumber}>Mudar Número</button>
            </div>

            <div className="input_dinamico">
                <h3>Seja bem vindo {nome}!</h3>
                <input type="text" value={nome} onChange = {(e) => setNome(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Usestate;