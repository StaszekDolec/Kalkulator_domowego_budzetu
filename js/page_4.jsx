import React from 'react';
import Baner from './Baner.jsx';
import Chart from './Chart.jsx';
import ChartTwo from './ChartTwo.jsx';
import Circle from './Circle.jsx';
import RandomFacts from "./RandomFacts.jsx";

class Resume extends React.Component {

    render() {

        return (
            <div>
                <div className={'banerFrame'}>
                    <Baner text={"./../images/obszar_roboczy4.png"}/>
                </div>
                <div className={'container4threeInp'}>
                    <div className={'chartStyle'}>
                    <Chart expenses={this.props.added / this.props.single * 100}
                           rest={100 - (this.props.added / this.props.single * 100)}
                           added={this.props.added}
                           income={this.props.single}/>
                    </div>
                    <div className={'chartStyle'}>
                    <ChartTwo housing={this.props.one / this.props.added * 100}
                              regular={this.props.two / this.props.added * 100}
                              consumption={this.props.three / this.props.added * 100}
                              added={this.props.added}/>
                    </div>
                </div>
                <div className={'circleFrame'}>
                    <Circle savings={this.props.single - this.props.added}/>
                    <RandomFacts savings={this.props.single - this.props.added}/>
                </div>
            </div>
        );
    }
}

export default Resume;