import React from 'react';
import Baner from './Baner.jsx';
import Button from './Button.jsx';
import InputPageTwo from './InputPageTwo.jsx';
import {Link} from "react-router-dom";

class Expenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputOne: 0,
            inputTwo: 0,
            inputThree: 0
        }
    }

    checkOne = (data) => {
        this.setState({
            inputOne: data,
        }, () => {
            this.props.checkFirst(data);
        })
    };

    checkTwo = (data) => {
        this.setState({
            inputTwo: data,
        }, () => {
            this.props.checkSecond(data);
        })
    };

    checkThree = (data) => {
        this.setState({
            inputThree: data,
        }, () => {
            this.props.checkThird(data);
        })
    };

    render() {
        const validate = this.state.inputOne + this.state.inputTwo + this.state.inputThree;

        return (
            <div>
                <div className={'banerFrame'}>
                    <Baner text={"./../images/wydatki.png"}/>
                </div>
                <div className={'container4threeInp'}>
                    <div className={'inpStyle'}>
                        <InputPageTwo check={this.checkOne} headText="DOM I RACHUNKI" fillerText="koszty czynszu albo kredytu. Rachunki za prąd, gaz, internet, telefon itp.."/>
                    </div>
                    <div className={'inpStyle'}>
                        <InputPageTwo check={this.checkTwo} headText="STAŁE WYDATKI" fillerText="koszty paliwa albo biletów. Opłaty za siłownie, naukę, opiekunkę itp.."/>
                    </div>
                    <div className={'inpStyle'}>
                        <InputPageTwo check={this.checkThree} headText="KONSUMPCJA" fillerText="koszty życia tzn. wydatki na jedzenie, ubrania, kosmetyki, rozrywkę itp..."/>
                    </div>
                </div>
                <div className={'btnFrame'}>
                    <Link to={'/resumePage'}><Button disabled={validate === 0} btnText="ZATWIERDŹ"/></Link>
                </div>
            </div>
        );
    }
}

export default Expenses;