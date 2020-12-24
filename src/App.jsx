import "./App.css"

import React from "react"

import { Primeiro } from "./components/basicos/PrimeiroComponente"
import { NumeroAleatorio } from "./components/basicos/Aleatorio"
import { Card } from "./components/layout/Card"


const App = (props) => {
    return (
        <div className='App'>
            <h1>Titulo Aplicação</h1>
            <div className='Cards'>
                <Card titulo='Primeiro'>
                    <Primeiro titulo='tiiitulo' subtitulo='subtitulo'></Primeiro>
                </Card>
                <Card titulo='Valor Aleatório'>
                    <NumeroAleatorio min={1} max={3}></NumeroAleatorio>
                </Card>
            </div>
        </div>
    );
}

export {
    App
}