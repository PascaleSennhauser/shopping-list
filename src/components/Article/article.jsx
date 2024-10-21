import React, { Component } from 'react';
import styles from './Article.module.css';

class Article extends Component {
    state = {  } 
    render() { 
        return (
            <div onClick={this.props.onAdd} className={styles.article}>
                {this.props.title}
            </div>
        );
    }
}
 
export default Article;