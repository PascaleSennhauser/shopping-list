import React, { Component } from 'react';
import Article from '../Article/article';
import classes from './AllArticles.module.css';

class AllArticles extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2>Frequent Articles</h2>
                <div className={classes.articleContainer}>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />

                </div>
            </div>
        );
    }
}

export default AllArticles;