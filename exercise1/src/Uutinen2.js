import React from 'react';
import './Uutinen.css';

const Uutinen2 = props => {

        return <section className="uutinenMain"> 
            <section className="uutinen" onClick={() => alert("Klikkasit uutista, mut eipäs auennut :(")}>     
                <div className="teaserTitle">{props.title}</div>
                    <img className="teaserImage" src={props.image} alt="Jos linkki toimii niin tässä pitäs näkyä kuva"></img>
                <div className="teaserContent">
                    <div className="teaserContentText"><span className="teaserContentTitleBlue">{props.title}</span>
                    <span className="teaserContentDivider"> | </span>{props.content}</div>
                </div>
                <div className="subject">{props.subject} {props.klo}</div>
            </section>
        </section>
}

export default Uutinen2;