var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ChartTwo extends Component {
    render() {
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: `Wydatki: ${this.props.added} zł`
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    {y: this.props.housing.toFixed(1), label: "Dom i Rachunki"},
                    {y: this.props.regular.toFixed(1), label: "Stałe Wydatki"},
                    {y: this.props.consumption.toFixed(1), label: "Konsumpcja"},

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

module.exports = ChartTwo;