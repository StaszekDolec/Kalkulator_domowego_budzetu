import React from 'react';

class Baner extends React.Component {
    render() {
        return (
            <img src={this.props.text} alt={"Twoje Dochody"}/>
        );
    }
}

export default Baner;