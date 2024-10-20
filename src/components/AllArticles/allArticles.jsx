import React, { Component } from 'react';
import Article from '../Article/article';

class AllArticles extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h2>Frequent Articles</h2>
                <Article />
                <Article />
                <Article />
                <Article />
            </div>

        );
    }
}
 
export default AllArticles;