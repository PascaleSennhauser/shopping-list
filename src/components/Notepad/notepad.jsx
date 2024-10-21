import React, { Component } from 'react';
import './Notepad.css';

class Notepad extends Component {
    state = {}

    removeItem = (index) => {
        this.props.onRemove(index);
    };

    addAmount = (index) => {
        this.props.onAddAmount(index);
    };


    render() {
        return (
            <div className="notepad">
                <h2>Shopping list:</h2>
                <ul>
                    {this.props.items.map((item, index) => (
                        <li key={index}>
                            <div className="product">• {item.name}</div>
                            <div>
                                <span onClick={() => this.removeItem(index)}>- </span>
                                {item.amount}
                                <span onClick={() => this.addAmount(index)}> +</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Notepad;