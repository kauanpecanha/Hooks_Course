import React from 'react'
import { useState, useRef } from 'react'

const UseRef = props => {
    const [word, setWord] = useState('')
    const palavra = useRef('')
    return(
        <div className="UseRef">
            <h1>Hook UseRef</h1>
            <h3>Retorna um objeto mutável com a propriedade .current</h3>
            <h3>useState e useRef fazem basicamente a mesma função. A principal diferença entre esses hooks é que: enquanto o useState baseia-se na re-renderização toda vez que houver alguma mudança nas propriedades do objeto, o useRef as faz, sem a necessidade de renderizá-lo novamente.</h3>

            <h3>Para saber mais, acesse:<br></br> 
                <a href='https://medium.com/@guigaoliveira_/conhecendo-o-useref-do-react-9d67e66'>useRef, no Medium</a>
                <br></br>
                <a href='https://developerplus.com.br/hook-useref-no-react-native/'>Exemplo de Uso do useRef</a>
                </h3>

        </div>
    )
}

export default UseRef;