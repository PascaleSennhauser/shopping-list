import React, { Component } from 'react';
import styles from './AddArticle.module.css';

class AddArticle extends Component {
    state = {}


    /**
     * This method adds the item of the input field to the shopping-list.
     */
    addItem = () => {
        let name = document.getElementById('articleName').value;
        if (name.trim()) {
            this.props.onAddItem(name);
            document.getElementById('articleName').value = '';
        }
    }


    /**
     * This method filters the article list to show only the articles that include the input value.
     */
    filterItem = () => {
        let name = document.getElementById('articleName').value;
        if (name.trim()) {
            this.props.filterItems(name);
        } else {
            this.props.filterItems('');
        }
    }


    render() {
        return (
            <div className={styles.outerContainer}>
                <h2>Search for an article</h2>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        id="articleName"
                        onInput={this.filterItem}
                    />
                    <button className={styles.btn} onClick={this.addItem}>Add article</button>
                </div>
            </div>
        );
    }
}

export default AddArticle;