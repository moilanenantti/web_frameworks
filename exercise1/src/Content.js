import React from 'react';
import Uutinen1 from './Uutinen1.js';
import Uutinen2 from './Uutinen2.js';
import Luetuin from './Luetuin.js';
import Uusin from './Uusin.js';

class Content extends React.Component {

    
    render(){
        const paivanTimantti = this.props.timantinKuvaus.map((item, index) => <a key={index}>{item.text}</a>)
        const mainos = this.props.mainokset.map((item, index) => <a key={index}>{item.text}</a>)

    return(
        <div className="Content" >
            <div className="contentMain">
                <section className="suggestions">
                    <div className="timantti" onClick={() => alert("Sä oot se päivän timantti ;)")}><span className="suggestionsTitle">PÄIVÄN TIMANTTI: </span>{paivanTimantti[0]}</div>
                    <div className="timantti" onClick={() => alert("Sä oot se päivän timantti ;)")}><span className="suggestionsTitle">PÄIVÄN TIMANTTI: </span>{paivanTimantti[1]}</div>
                    <div className="advertisement" onClick={() => alert("Lol kuka nyt mainoksia klikkailee")}><span className="suggestionsTitle">MAINOS: </span>{mainos[0]}</div>
                    <div className="readme">Hei sinä joka vertaisarvioit &#9888; Kokeile sivun skaalausta muuttamalla selainikkunan kokoa sivusuunnassa. Kokeile myös sivun objektien toimintoja klikkaamalla niitä &#128516;</div>
                </section>
                <section className="content">
                    <div className="news">
                        <Uutinen1 />
                        {this.props.uutisSyote.map(i => <Uutinen2 {...i} key={i.id}/>)}
                    </div>
                    <div className="sidebar">

                        <div className="luetuimmatHeader">
                            <div className="luetuimmatTitle">Luetuimmat</div>
                            <div className="luetuimmatBorder"></div>
                        </div>

                        <div className="sidebarContent">
                            <div className="luetuimmat">
                                {this.props.sidebarLuetuin.map(i => <Luetuin {...i} key={i.id}/>)} 
                            </div>
                            <div className="luetuimmatEnd">
                                <div className="luetuimmatNaytaLisaa" onClick={() => alert("En osaa vielä :[")}>Näytä lisää</div>
                            </div>
                        </div>
                    <div className="sidebarDivider"></div>
                        <div className="luetuimmatHeader">
                            <div className="luetuimmatTitle">Uusimmat</div>
                            <div className="luetuimmatBorder"></div>
                        </div>

                        <div className="sidebarContent">
                            <div className="luetuimmat">
                                {this.props.sidebarUusin.map(i => <Uusin {...i} key={i.id}/>)} 
                            </div>
                            <div className="luetuimmatEnd">
                                <div className="luetuimmatNaytaLisaa" onClick={() => alert("En osaa vielä :[")}>Näytä lisää</div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
        )
    };
}

export default Content;
