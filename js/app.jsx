import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import '../sass/style.scss';
import MainPage from './page_1.jsx';
import IncomePage from './page_2.jsx';
import Expenses from './page_3.jsx';
import Resume from './page_4.jsx';

document.addEventListener("DOMContentLoaded", function () {

    class Navigation extends React.Component {
        render() {
            return (
                <navigation>
                    <div className={'navBar'}>
                        <ul className={'navUl'}>
                            <li><Link to={'/'}>Wróć Do początku</Link></li>
                            <li><a href={'https://www.linkedin.com/in/wojciech-doleg%C5%82o-271279175/'} target={'_blank'}>O mnie</a></li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                </navigation>
            )
        }
    }

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inpPageOne: 0,
                firstInpPageTwo: 0,
                secondInpPageTwo: 0,
                thirdInpPageTwo: 0,
                pageTwoTotal: 0
            }
        }

        addingUp = () => {
            let adding = this.state.firstInpPageTwo + this.state.secondInpPageTwo + this.state.thirdInpPageTwo;
            this.setState({
                pageTwoTotal: adding
            })
        };

        check = (data) => {
            this.setState({
                inpPageOne: data,
            })
        };

        checkFirst = (data) => {
            this.setState({
                firstInpPageTwo: data,
            }, this.addingUp)
        };

        checkSecond = (data) => {
            this.setState({
                secondInpPageTwo: data,
            }, this.addingUp)
        };

        checkThird = (data) => {
            this.setState({
                thirdInpPageTwo: data,
            }, this.addingUp)
        };

        render() {
            return (
                <HashRouter>
                    <section className={'container'}>
                        <Navigation/>
                        <Switch>
                            <Route exact path='/' component={MainPage}/>
                            <Route exact path='/incomePage'
                                   render={(props) => <IncomePage {...props}
                                                                  check={this.check}/>}/>
                            <Route exact path='/expensesPage'
                                   render={(props) => <Expenses {...props}
                                                                checkFirst={this.checkFirst}
                                                                checkSecond={this.checkSecond}
                                                                checkThird={this.checkThird}
                                   />}/>
                            <Route exact path='/resumePage' render={(props) => <Resume {...props}
                                                                                       single={this.state.inpPageOne}
                                                                                       one={this.state.firstInpPageTwo}
                                                                                       two={this.state.secondInpPageTwo}
                                                                                       three={this.state.thirdInpPageTwo}
                                                                                       added={this.state.pageTwoTotal}
                            />}/>
                        </Switch>
                    </section>
                </HashRouter>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});