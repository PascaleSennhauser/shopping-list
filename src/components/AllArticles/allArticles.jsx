import React, { Component } from 'react';
import Article from '../Article/article';
import styles from './AllArticles.module.css';

class AllArticles extends Component {
    state = {}

    addItem = (name) => {
        this.props.onAddItem(name);
    }

    render() {
        return (
            <div className={styles.outerContainer}>
                <h2>Frequent Articles</h2>
                <div className={styles.articleContainer}>
                    { this.props.articles.map((article, index) => <Article key={index} onAdd={() => this.addItem(article)} title={article} />)}
                </div>
            </div>
        );
    }
}

export default AllArticles;