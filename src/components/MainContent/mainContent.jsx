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
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name == name);
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
    }
    render() {
        return (
            <div className="content-container">
                <div className="left-container">
                    <AddArticle />
                    <AllArticles onAddItem={this.addItem} />
                </div>
                <div className="right-container">
                    <Notepad items={this.state.items} />
                </div>
            </div>
        );
    }
}

export default MainContent;