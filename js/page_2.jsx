import React from 'react';
import Baner from './Baner.jsx';
import Button from './Button.jsx';
import {Link} from 'react-router-dom';

class IncomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incomeInputs: ['',],
            sumInputs: 0,
        }
    }

    counter = () => {
        const sumINP = this.state.incomeInputs.reduce((a, b) => Number(a) + Number(b), 0);

        this.setState({
            sumInputs: sumINP,
        }, () => {
            this.props.check(sumINP);
        })
    };

    removeItem = e => {
        const index = e.target.dataset.index;

        const newItems = this.state.incomeInputs.slice();
        newItems.splice(index, 1);

        this.setState({
            incomeInputs: newItems,
        }, this.counter)
    };

    addInput = () => {
        const newInputs = this.state.incomeInputs.slice();
        newInputs.push('');

        this.setState({
            incomeInputs: newInputs,
        })
    };

    inputChange = (e) => {
        let newIncomeInp = this.state.incomeInputs.slice();
        newIncomeInp[e.target.dataset.index] = e.target.value;

        this.setState({
            incomeInputs: newIncomeInp,
        }, this.counter)
    };

    render() {
        const list = this.state.incomeInputs.map((el, index) => {
            return (<li>
                <input  onChange={this.inputChange} data-index={index} value={this.state.incomeInputs[index]}
                               type="number" placeholder="0.00"/>
                <button className={'subBtn'} onClick={this.removeItem} data-index={index} disabled={this.state.incomeInputs.length === 1}><i className="far fa-trash-alt"/>
                </button>
            </li>)
        });
        // console.log(this.state.sumInputs);
        return (

            <div>
                <div className={'banerFrame'}>
                    <Baner text={"./../images/dochody.png"}/>
                </div>
                <div className={'page2InpFrame'}>
                    <ul>
                        <span className={'textItself'}>Podaj swoje dochody:</span>
                        {list}
                        <li><button className={'btnAdd'} onClick={this.addInput} disabled={this.state.incomeInputs.length > 4}><p>Dodaj Kolejny Dochód</p></button></li>
                    </ul>
                </div>
                <div className={'btnFrame'}>
                    <Link to={'/expensesPage'}><Button disabled={this.state.sumInputs === 0} btnText="ZATWIERDŹ"/></Link>
                </div>
            </div>
        );
    }
}

export default IncomePage;