import React from 'react';

class RandomFacts extends React.Component {
    render() {
        let kino = 15;
        let thai = 1800;
        let bigMac = 10;
        let beer = 9;
        return (
            <div>
                <div className={'randomFrame'}>
                    <h2 className={'textItselfH'}>Co z tym zrobić :</h2>
                    <p className={'textItself'}>Iść {Math.floor(this.props.savings / kino)} razy do kina.</p>
                    <p className={'textItself'}>Polecieć {Math.floor(this.props.savings / thai)} razy do Tajlandii.</p>
                    <p className={'textItself'}>Zjeść {Math.floor(this.props.savings / bigMac)} BigMac'ów.</p>
                    <p className={'textItself'}>Wypić {Math.floor(this.props.savings / beer)} dobyrch piw. </p>
                    <p className={'textItself'}><a href="https://businessinsider.com.pl/finanse/inwestowanie/w-co-i-jak-inwestowac-inwestowanie-dla-poczatkujacych/48eg3c6" target={'_blank'}>Albo dowiedz się jak inwestować</a></p>
                </div>
                {/*<div>*/}
                {/*<input type="text" placeholder="Cel"/>*/}
                {/*<input type="number" placeholder="Kwota"/>*/}
                {/*<p>Uzbierasz na to w : xx miesięcy</p>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default RandomFacts;