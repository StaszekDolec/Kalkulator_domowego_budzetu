import React from 'react';
import Baner from './Baner.jsx';
import Button from './Button.jsx';
import {Link} from 'react-router-dom';


class TextPageOne extends React.Component {
    render() {
        return (
            <div>
                <article className={'pageOneText'}>
                    <p className={'textItself'}>Cześć! Witam Cię na mojej stronie, na której chciałbym pomóc Ci ogarnąć Twój domowy budżet, nie znajdziesz tu zbyt wielu odkrywczych rzeczy, ale dzięki prostym wykresom zobaczysz co tak naprawdę zjada Twoje pieniądze, co może pozwoli Ci się zastanowić na czym mógłbyś przyoszczędzić, żeby więcej zostawało w kieszeni.</p>
                </article>
            </div>
        );
    }
}

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <div className={'banerFrame'}>
                    <Baner text={"./../images/obszar_roboczy1.png"} />
                </div>
                <div>
                    <TextPageOne/>
                </div>
                <div className={'btnFrame'}>
                    <Link to={'/incomePage'}><Button btnText="ROZPOCZNIJ"/></Link>
                </div>
            </div>
        )
    }
}

export default MainPage;