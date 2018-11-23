import React from 'react';

class Button extends React.Component {

    render() {
        const disabled = this.props.disabled ? true : false;

        return (
            <div>
                <button disabled={disabled} className={'btn'}>{this.props.btnText}</button>
            </div>
        );
    }
}

export default Button;