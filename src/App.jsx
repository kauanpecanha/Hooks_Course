import react from 'react'
import './App.css'
import {useState} from 'react'
import Usestate from './Components/UseState'
import UseEffect from './Components/UseEffect'
import UseRef from './Components/UseRef'
import UseMemo from './Components/useMemo'


import Counter from './Practice/Counter'
import Welcome from './Practice/Welcome'

import Fibonacci from './Practice/Fibonacci'
import Rectangle from './Practice/Rectangle'
import Triangle from "./Practice/Triangle"


import Test from "./Practice/Test"


export default function App(){
        return(
        <div className='app'>
            {/* <Usestate /> */}
            {/* <UseEffect /> */}
            {/* <UseRef /> */}
            {/* <UseMemo /> */}


            {/* <Counter /> */}
            {/* <Welcome /> */}
            {/* <Fibonacci /> */}
            {/* <Rectangle /> */}
            <Triangle />

            {/* <Test /> */}

        </div>
    )
}