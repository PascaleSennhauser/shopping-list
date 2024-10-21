import React, { Component } from 'react';
import AddArticle from './../AddArticle/addArticle';
import AllArticles from './../AllArticles/allArticles';
import Notepad from './../Notepad/notepad';
import './MainContent.css';

class MainContent extends Component {
    state = {
        items: [],
        articles: ['Apple', 'Banana', 'Pear', 'Milk', 'Bread', 'Chocolate', 'Spaghetti', 'Oats', 'Yoghurt', 'Rice'],
        filteredArticles: []
    }

    addItem = (name) => {
        let currentItems = [...this.state.items]; // Kopie des Arrays

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

    addAmount = (index) => {
        let currentItems = [...this.state.items];

        if (currentItems[index]) {
            currentItems[index].amount++;
        }

        this.setState({
            items: currentItems
        })
    };

    filterItem = (name) => {
            const filtered = this.state.articles.filter(article =>
                article.toLowerCase().includes(name.toLowerCase())
            );
            this.setState({ filteredArticles: filtered });
    }

    render() {
        return (
            <div className="content-container">
                <div className="left-container">
                    <AddArticle onAddItem={this.addItem} filterItems={this.filterItem}/>
                    <AllArticles onAddItem={this.addItem} articles={this.state.filteredArticles.length > 0 ? this.state.filteredArticles : this.state.articles} />
                </div>
                <div className="right-container">
                    <Notepad items={this.state.items} onRemove={this.removeItem} onAddAmount={this.addAmount} />
                </div>
            </div>
        );
    }
}

export default MainContent;