import React, { Component } from 'react';
import AddArticle from './../AddArticle/addArticle';
import AllArticles from './../AllArticles/allArticles';
import Notepad from './../Notepad/notepad';
import './MainContent.css';

class MainContent extends Component {
    state = {
        items: []
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

        // Wenn das Item existiert und die Menge größer als 0 ist, Menge verringern
        if (currentItems[index] && currentItems[index].amount > 0) {
            currentItems[index].amount--; // Menge um 1 verringern
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

    render() {
        return (
            <div className="content-container">
                <div className="left-container">
                    <AddArticle />
                    <AllArticles onAddItem={this.addItem} />
                </div>
                <div className="right-container">
                    <Notepad items={this.state.items} onRemove={this.removeItem} onAddAmount={this.addAmount} />
                </div>
            </div>
        );
    }
}

export default MainContent;