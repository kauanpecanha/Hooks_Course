import React from 'react'
import { useState } from 'react'
import './Welcome.css'

const Welcome = props => {
    const [name, setName] = useState('')

    return(
        <div className="welcome">
            <div className="title">
                <h2>Seja bem vindo(a), {name}!</h2>
            </div>
            <div className="input">
                <input placeholder='Entre com seu nome aqui!' type = "text" value = {name} onChange = {(e) => setName(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Welcome;