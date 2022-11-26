import react from 'react'
import './App.css'
import {useState} from 'react'
import Usestate from './Components/UseState'
import UseEffect from './Components/UseEffect'

import Counter from './Practice/Counter'
import Welcome from './Practice/Welcome'

import Fibonacci from './Practice/Fibonacci'
import Rectangle from './Practice/Rectangle'


export default function App(){
        return(
        <div className='app'>
            {/* <Usestate /> */}
            {/* <UseEffect /> */}


            {/* <Counter /> */}
            {/* <Welcome /> */}
            {/* <Fibonacci /> */}
            <Rectangle />
        </div>
    )
}