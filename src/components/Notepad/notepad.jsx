import React, { Component } from 'react';
import styles from './Notepad.module.css';

class Notepad extends Component {
    state = {}


    /**
     * This method removes an item based on the specified index.
     * @param {number} index - The index of the item. 
     */
    removeItem = (index) => {
        this.props.onRemove(index);
    };


    /**
     * This method adds an item to the amount based on the spcified index.
     * @param {number} index - The index of the item.
     */
    addAmount = (index) => {
        this.props.onAddAmount(index);
    };


    render() {
        return (
            <div className={styles.notepad}>
                <h2 className={styles.title}>Shopping list:</h2>
                <ul className={styles.list}>
                    {this.props.items.map((item, index) => (
                        <li className={styles.listEl} key={index}>
                            <div className={styles.product}>• {item.name}</div>
                            <div>
                                <span className={styles.spanEl} onClick={() => this.removeItem(index)}>- </span>
                                {item.amount}
                                <span className={styles.spanEl} onClick={() => this.addAmount(index)}> +</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Notepad;