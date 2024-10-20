import React, { Component } from 'react';
import AddArticle from './../AddArticle/addArticle';
import AllArticles from './../AllArticles/allArticles';
import Notepad from './../Notepad/notepad';
import './MainContent.css';


class MainContent extends Component {
    state = {}
    render() {
        return (
            <div className="content-container">
                <div className="left-container">
                    <AddArticle />
                    <AllArticles />
                </div>
                <div className="right-container">
                    <Notepad />
                </div>
            </div>
        );
    }
}

export default MainContent;