import React from 'react'
import { useState, useEffect } from 'react'    

function fat(num){
    const n = parseInt(num)
    if(n<0) return "Número inválido"
    if(n === 0) return 1
    return fat(n-1) * n
}

const UseEffect = props => { 
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    
    useEffect(function(){
        setFatorial(fat(number))
    }, [number])

    return(
        <div className="useEffect">
            <div className="title">
                <h1>Hook useEffect</h1>
                <h3>Permite executar efeitos colaterais em componentes funcionais!</h3>
                <p>Um grande exemplo de como pode-se fazer uso do useEffect é o fatorial. No exemplo abaixo, foi criado um imput com o intuito de aumnetar ou decrescer números. À medida que se muda estes números, <strong>o resultado do fatorial também se altera.</strong> Este é um importante conceito, uma vez que a mudança em uma variável determina o valor de outra, e desta forma, gera-se um <strong>efeito colateral</strong>.</p>

                <p>Sua estrutura é da seguinte forma: useEffect(primeiro_parâmetro, segundo_parâmetro). O primeiro parâmetro será a função chamada para alterar a variável colateral. Já o segundo, é um array com todas as variáveis responsáveis por alterar colateralmente a outra.</p>
            </div>

            <div className="example1">
                <h3>Fatorial:{fatorial}</h3>
                <input type = "number" value={number} onChange={e => setNumber(e.target.value)}></input>
            </div>
        </div>
    )
}

export default UseEffect;