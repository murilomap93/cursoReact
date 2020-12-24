import { React } from "react"

const NumeroAleatorio = (props) => {
    const min = Math.ceil(props.min)
    const max = Math.floor(props.max)
    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <>
            <h2>Numero aleatorio: {aleatorio}</h2>
        </>
    );
}

export {
    NumeroAleatorio
}