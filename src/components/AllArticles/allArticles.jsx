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
                    <Article title="Apple"/>
                    <Article title="Banana"/>
                    <Article title="Pear"/>
                    <Article title="Milk"/>
                    <Article title="Bread"/>
                    <Article title="Chocolate"/>
                    <Article title="Spaghetti"/>
                    <Article title="Oats"/>
                    <Article title="Yoghurt"/>
                    <Article title="Rice"/>

                </div>
            </div>
        );
    }
}

export default AllArticles;