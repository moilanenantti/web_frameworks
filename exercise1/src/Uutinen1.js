import React from 'react';
import './Uutinen.css';
import picture from './pic.png';

class Uutinen1 extends React.Component {
    render() {

        return(
            <section className="uutinenMain"> 
            <section className="uutinen" onClick={() => alert("Klikkasit uutista, mut eipäs auennut :(")}>     
                <div className="teaserTitle">Koronavirus</div>
                    <img className="teaserImage" src="https://hs.mediadelivery.fi/img/658/fc7005d2dcff437f80c3208323561057.jpg.webp" alt="tässä pitäs näkyä kuva jos linkki toimii"></img>
                <div className="teaserContent">
                    <div className="seuranta">
                        <div className="dot"></div>
                        <div className="seurantaText">HS seuraa</div>
                    </div>
                    <div className="teaserContentText"><span className="teaserContentTitleBlue">Päivittyvä Seuranta</span>
                    <span className="teaserContentDivider"> | </span>STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</div>
                </div>
                <img src={picture} alt="laiskanaOtinKoronadatastaKuvanKunEnJaksanuAlkaaVääntääHTML"/>
                <div className="subject">Kotimaa 19:23</div>
            </section>
        </section>
        );
    }
}

export default Uutinen1;