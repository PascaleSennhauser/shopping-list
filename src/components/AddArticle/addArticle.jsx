import React, { Component } from 'react';
import styles from './AddArticle.module.css';

class AddArticle extends Component {
    addItem = () => {
        let name = document.getElementById('articleName').value;
        if (name.trim()) {
            this.props.onAddItem(name);
            document.getElementById('articleName').value = '';
        }
    }

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
            <div>
                <h2>Search for an article</h2>
                <input 
                    className={styles.input}
                    id="articleName" 
                    onInput={this.filterItem}
                />
                <button className={styles.btn} onClick={this.addItem}>Add article</button>
            </div>
        );
    }
}
 
export default AddArticle;