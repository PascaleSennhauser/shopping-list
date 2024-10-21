import React, { Component } from 'react';
import AddArticle from './../AddArticle/addArticle';
import AllArticles from './../AllArticles/allArticles';
import Notepad from './../Notepad/notepad';
import styles from './MainContent.module.css';

class MainContent extends Component {
    state = {
        items: [],
        articles: ['Apple', 'Banana', 'Pear', 'Milk', 'Bread', 'Chocolate', 'Spaghetti', 'Oats', 'Yoghurt', 'Rice'],
        filteredArticles: []
    }


    /**
     * Adds an item to the list or increments the amount if it already exists.
     * @param {string} name - the name of the item. 
     */
    addItem = (name) => {
        let currentItems = [...this.state.items];
        let existingItem = currentItems.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount: 1,
                name: name
            });
        }
        this.setState({
            items: currentItems
        });
    };


    /**
     * Removes an item from the list or decreases the amount if it's not zero.
     * @param {number} index -The index of the item to be removed or devremented.
     */
    removeItem = (index) => {
        let currentItems = [...this.state.items];
        if (currentItems[index] && currentItems[index].amount > 0) {
            currentItems[index].amount--;
            if (currentItems[index].amount <= 0) {
                currentItems.splice(index, 1);
            }
            this.setState({
                items: currentItems
            });
        }
    };


    /**
     * Adds an item to the list or increments the amount it it's already existing.
     * @param {number} index - The index of the item.
     */
    addAmount = (index) => {
        let currentItems = [...this.state.items];
        if (currentItems[index]) {
            currentItems[index].amount++;
        }
        this.setState({
            items: currentItems
        })
    };


    /**
     * This method filters the articles array to show only the articles that include the input value.
     * The filtered values are saved in the filteredArticles array and are shown.
     * @param {string} name - The value of the input field. 
     */
    filterItem = (name) => {
            const filtered = this.state.articles.filter(article =>
                article.toLowerCase().includes(name.toLowerCase())
            );
            this.setState({ filteredArticles: filtered });
    }


    render() {
        return (
            <div className={styles.contentContainer}>
                <div className={styles.leftContainer}>
                    <AddArticle onAddItem={this.addItem} filterItems={this.filterItem}/>
                    <AllArticles onAddItem={this.addItem} articles={this.state.filteredArticles.length > 0 ? this.state.filteredArticles : this.state.articles} />
                </div>
                <div className={styles.rightContainer}>
                    <Notepad items={this.state.items} onRemove={this.removeItem} onAddAmount={this.addAmount} />
                </div>
            </div>
        );
    }
}

export default MainContent;