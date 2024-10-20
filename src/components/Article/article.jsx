import React, { Component } from 'react';
import classes from './Article.module.css';

class Article extends Component {
    state = {  } 
    render() { 
        return (
            <div className={classes.article}>
                Apple
            </div>
        );
    }
}
 
export default Article;