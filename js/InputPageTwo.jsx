import React from 'react';

class InputPageTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseInputs: ['',],
            sumExpenses: 0,
        }
    }

    counter = () => {
        const sumINP = this.state.expenseInputs.reduce((a, b) => Number(a) + Number(b), 0);

        this.setState({
            sumExpenses: sumINP,
        }, () => {
            this.props.check(sumINP);
        })
    };

    removeItem = e => {
        const index = e.target.dataset.index;

        const newItems = this.state.expenseInputs.slice();
        newItems.splice(index, 1);

        this.setState({
            expenseInputs: newItems,
        }, this.counter)
    };

    addInput = () => {
        const newInputs = this.state.expenseInputs.slice();
        newInputs.push('');

        this.setState({
            expenseInputs: newInputs,
        })
    };

    inputChange = (e) => {
        let newIncomeInp = this.state.expenseInputs.slice();
        newIncomeInp[e.target.dataset.index] = e.target.value;

        this.setState({
            expenseInputs: newIncomeInp,
        }, this.counter)
    };

    render() {
        const list = this.state.expenseInputs.map((el, index) => {
            return (<li>
                <input type="text" placeholder="Za co "/>
                <input onChange={this.inputChange} data-index={index} value={this.state.expenseInputs[index]}
                       type="number" placeholder="Ile"/>
                <button className={'subBtn'} onClick={this.removeItem} data-index={index}
                        disabled={this.state.expenseInputs.length === 1}><i className="far fa-trash-alt"/>
                </button>
            </li>)
        });
        // console.log(this.state.sumExpenses);
        return (
            <div>
                <div>
                    <h2 className={'textItselfH'}>{this.props.headText}</h2>
                    <p className={'textItself'}>{this.props.fillerText}</p>
                </div>
                <div>
                    <ul>
                        {list}
                    </ul>
                    <button className={'btnAdd'} onClick={this.addInput} disabled={this.state.expenseInputs.length > 5}><p>Dodaj Kolejne Wydatki</p></button>
                </div>
            </div>
        );
    }
}

export default InputPageTwo;