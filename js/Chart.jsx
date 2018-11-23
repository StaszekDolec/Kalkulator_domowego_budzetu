var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
    render() {
        console.log(this.props.expenses);
        console.log(this.props.rest);
        const options = {
            animationEnabled: true,
            title: {
                text: `Zarabiasz: ${this.props.income}zł.`
            },
            subtitles: [{
                text: `Wydajesz ${this.props.added}zł.`,
                verticalAlign: "center",
                fontSize: 20,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    {name: "Wydatki", y: this.props.expenses},
                    {name: "Zostaje Ci", y: this.props.rest},
                ]
            }]
        };
        return (
            <div>
                <CanvasJSChart options={options}
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

module.exports = Chart;