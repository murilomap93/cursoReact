import { React } from "react"

const Primeiro = (props) => {
    return (
        <>
            <h2>Título: {props.titulo}</h2>
            <h3>SubTítulo: {props.subtitulo}</h3>
        </>
    );
}

export {
    Primeiro
}