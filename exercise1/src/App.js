// ANTTI MOILANEN TVT21KMO

import React from "react";
import './App.css';
import './Content.css';
import Header from './Header.js';
import Content from './Content.js';

class App extends React.Component {
  state = { 
    paivanTimantti: [
      {id:1, text: 'Tutkija kertoo: Näin sota näkyy meissä edelleen'},
      {id:2, text: 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi – Näin hän säästäisi aviopuolisona 19 200 euroa'}
    ],
    mainokset: [
      {id:1, text: 'Faktoille on nyt suurempi tarve kuin koskaan – tutustu Hesariin 2 viikkoa maksutta!'}
    ],
    luetuinData: [
      {id:1, title: 'Rikosepäilyt', content: 'EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa'},
      {id:2, title: 'HS Vantaa', content: 'Vantaalle nousi bankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa'},
      {id:3, title: 'Päivittyvä seuranta', content: 'STM: Parasetamonia ja deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan – Ministeriö haluaa varmistaa valmisteiden riittävyyden'},
      {id:4, title: 'Inflaatio', content: 'Bensa, kahvi ja sähkö kallistuvat Suomessa rajua vauhtia – Hinnat ovat lähteneet lähes pystysuoraan nousuun, grafiikka näyttää inflaatiovauhdin'},
      {id:5, title: 'Rikosepäilyt', content: 'Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta – "Olen myöntänyt syyllisyyteni"'},
      {id:6, title: 'EU', content: 'Sanna Marin Venäjän väitteisiin jouokkojen vetämisestä: Odotamme, että teot seuraisivat puheita'},
      {id:7, title: 'Verot', content: 'Työmatkavähennyt nousee – suora lähetys ministeri Saarikon tiedotustilaisuudesta käynnissä'},
      {id:8, title: 'Eduskunta', content: 'Halla-aho kiisti maininneensa Biaudet'+"'"+'n raiskaus-kirrjoituksessaan, mutta vanhasta versiosta nimi löytyy – näin Halla-aho selittää'}
    ],
    uusinData: [
      {id:1, klo:"09:33", title: 'Ulkomaat', content: 'Matkustaja-aluksessa syttyi tuli­palo Kreikan lähellä, laivassa lähes 300 ihmistä – Video näyttää voimakkaasti savuavan lautan'},
      {id:2, klo:"10:56", title: 'Ihmissuhteet', content: 'Entinen portsari kiitti ystäviään yhteisestä matkasta lehti-ilmoituksella ennen dementoitumista – lääkäri tiivisti miehen terveydentilan yhdellä sanalla'},
      {id:3, klo:"10:59", title: 'Taitoluistelu', content: 'Kamila Valijeva, 15, on vain yksi surullinen tarina lisää kansainvälisen taitoluistelun historiassa. HS kertoo, kuinka kävi Venäjän menneille lapsitähdille'},
      {id:4, klo:"12:10", title: 'Kadonneet', content: 'Helsingissä kateissa olleet kaksi seitsemän­vuotiasta tyttöä on löydetty'},
      {id:5, klo:"13:11", title: 'Olympialaiset', content: 'Iivo Niskanen kaappasi vaimon kainaloonsa lentokentällä, isä ja äiti toivat pojalleen persoonallisen lahjan'},
      {id:6, klo:"13:31", title: 'Snooker', content: 'Snooker­pelaaja turvautui epätoivoiseen lyöntiin pelastaakseen nahkansa – lopputulos löi kaikki ällikällä'}
    ],
    uutinenData: [
      {id:1, klo:"14:32", title: "Ukrainan kriisi", subject: "Ulkomaat", content: "Länsimailla ja Venäjällä täysin eri käsitys tilanteesta Ukrainan rajoilla – Tämä Ukrainan kriisistä tiedetään nyt", image: "https://hs.mediadelivery.fi/img/658/0e808d1f8b0ec689e244370121bad5e7.jpg.webp"},
      {id:2, klo:"15:32", title: 'Ulkomaat', subject: "Ulkomaat" , content: 'Matkustaja-aluksessa syttyi tuli­palo Kreikan lähellä, laivassa lähes 300 ihmistä – Video näyttää voimakkaasti savuavan lautan', image:"https://hs.mediadelivery.fi/img/658/afe2d2bcef64c32fcb6d49ed511d79b6.jpg.webp"},
      {id:3, klo:"16:26", title: 'Ihmissuhteet', subject: "Ihmissuhteet", content: 'Entinen portsari kiitti ystäviään yhteisestä matkasta lehti-ilmoituksella ennen dementoitumista – lääkäri tiivisti miehen terveydentilan yhdellä sanalla', image:"https://hs.mediadelivery.fi/img/658/e6954e12f00da27d6024b1c278f2d7f2.jpg.webp"},
      {id:4, klo:"17:45", title: 'Taitoluistelu', subject: "Urheilu", content: 'Kamila Valijeva, 15, on vain yksi surullinen tarina lisää kansainvälisen taitoluistelun historiassa. HS kertoo, kuinka kävi Venäjän menneille lapsitähdille', image:"https://hs.mediadelivery.fi/img/978/84731ad6ffec59c3af72fe5445dc59c8.jpg.webp"}
    ]
  };
      
  
  render() {
    return(
      <div className="App" >
      <Header />
      <Content timantinKuvaus={ this.state.paivanTimantti } mainokset={this.state.mainokset} sidebarLuetuin={this.state.luetuinData} sidebarUusin={this.state.uusinData} uutisSyote={this.state.uutinenData}/>
      </div>
    )
  };
}

export default App;
