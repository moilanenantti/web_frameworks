import React from 'react';

const Header = () => {
    return(
        <div className="headerOut">
        <div className="headerIn">
            <div className="headerLeft">
                <img className="logo" onClick={() => alert("Etusivulle")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Helsingin_Sanomat_wordmark.svg/1200px-Helsingin_Sanomat_wordmark.svg.png"></img>
                <img className="logoSmall" onClick={() => alert("Etusivulle")} src="https://www.loviacollection.com/wp-content/uploads/2019/12/hs_logo-1024x900.png"></img>
                <div className="headerLeftOptions">
                    <div className="etusivu" onClick={() => alert("Etusivulle")} >Etusivu</div>
                    <div className="uutiset" onClick={() => alert("Uutisiin")} >Uutiset</div>
                    <div className="lehdet" onClick={() => alert("Lehtiin")} >Lehdet</div>
                    <div className="asiakaspalvelu" onClick={() => alert("Asiakaspalveluun")} >Asiakaspalvelu</div>
                </div>
            </div>
            <div className="emptyMiddleHeader"></div>
            <div className="headerRight">
                <div className="headerRight">
                    <div className="tilaa" onClick={() => alert("Se ois sitte kymppitonni kuussa se")} >Tilaa</div>
                </div>
                <div className="kirjaudu" onClick={() => alert("Your bank account credentials have successfully been sent to chinese hackers")} >Kirjaudu</div>
                <div className="headerRight">
                    <div className="valikko" onClick={() => alert("Ei oo paljon valinnanvaraa tässä valikossa")}>
                        <div className="valikkoText">Valikko</div>
                        <img className="threeLineBar" src="https://icon-library.com/images/three-line-menu-icon/three-line-menu-icon-29.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;