import React from 'react'

function Card(props){
    return (
            <div className="card">
                <img src={props.imgLink} alt={props.title}/>
                <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.description}</p>
                <p className="card-text">REAL NAME: {props.name}</p>
                <p className="card-text">SUPER POWER: {props.power}</p>
                </div>
            </div>
        
    )
}

export default Card;