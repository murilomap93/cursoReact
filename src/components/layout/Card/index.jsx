import React from "react"
import "./index.css"
const Card = (props) => {
    return (
        <div className='Card'>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>{props.children}</div>
        </div>
    );
}

export {
    Card
}