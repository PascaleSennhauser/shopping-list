import React, { Component } from 'react';
import './Notepad.css';

class Notepad extends Component {
    state = {}
    render() {
        return (
            <div className="notepad">
                <h2>Shopping list:</h2>
                <ul>
                    { this.props.items.map(item => <li key={item.name}><div className="product">• { item.name }</div><div><span>-</span> { item.amount } <span>+</span></div></li>)} 
                </ul>
            </div>
        );
    }
}

export default Notepad;