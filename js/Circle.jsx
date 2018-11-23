import React from 'react';

class Circle extends React.Component {
    render() {
        return (
            <div className={'circle'}>
                <p className={'circleTxt'}> Zostaje Ci: {this.props.savings} zł</p>
            </div>
        );
    }
}

export default Circle;