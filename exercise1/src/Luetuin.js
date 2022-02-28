import React from 'react';
import './Luetuin.css';

const Luetuin = props => {

    return <div className="luetuimmatMain">
            <div  className="luetuimmat1" onClick={() => alert("Luetuin artikkeli")}>
                <div className="nro">{props.id}</div>
                <div className="teksti"><span className="luetuimmatSubject">{props.title} | </span> {props.content}</div>            
            </div>
            <div className="luetuinBorder"></div>
        </div>
}

export default Luetuin;