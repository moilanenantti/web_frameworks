import React from 'react';
import './Uusin.css';

const Uusin = props => {

    return <div className="uusimmatMain">
            <div  className="uusimmat1" onClick={() => alert("Uusin artikkeli")}>
                <div className="klo">{props.klo}</div>
                <div className="teksti"><span className="uusimmatSubject">{props.title} | </span> {props.content}</div>            
            </div>
            <div className="uusinBorder"></div>
        </div>
}

export default Uusin;