import React, { Component } from 'react';
import './Notepad.css';

class Notepad extends Component {
    state = {
        items: [
            {
                name: "Tomato",
                amount: 2
            },
            {
                name: "Apple",
                amount: 3
            }
        ]
    }
    render() {
        return (
            <div className="notepad">
                <h2>Shopping list:</h2>
                <ul>
                    { this.state.items.map(item => <li key={item.name}><div className="product">• { item.name }</div><div><span>-</span> { item.amount } <span>+</span></div></li>)} 
                </ul>
            </div>
        );
    }
}

export default Notepad;