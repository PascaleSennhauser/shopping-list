import React, { Component } from 'react';
import Article from '../Article/article';
import classes from './AllArticles.module.css';

class AllArticles extends Component {
    state = {
        articles: ['Apple', 'Banana', 'Pear', 'Milk', 'Bread', 'Chocolate', 'Spaghetti', 'Oats', 'Yoghurt', 'Rice']
    }

    addItem = (name) => {
        this.props.onAddItem(name);
    }

    render() {
        return (
            <div>
                <h2>Frequent Articles</h2>
                <div className={classes.articleContainer}>
                    { this.state.articles.map((article, index) => <Article key={index} onAdd={() => this.addItem(article)} title={article} />)}
                </div>
            </div>
        );
    }
}

export default AllArticles;