import React, { Component } from 'react';
import classes from './Article.module.css';

class Article extends Component {
    state = {  } 
    render() { 
        return (
            <div onClick={this.props.onAdd} className={classes.article}>
                {this.props.title}
            </div>
        );
    }
}
 
export default Article;