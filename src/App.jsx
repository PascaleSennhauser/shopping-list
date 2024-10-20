import React, { Component } from 'react';
import AllArticles from './components/AllArticles/allArticles';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Notepad from './components/Notepad/notepad';
import AddArticle from './components/AddArticle/addArticle';

class App extends Component {
    state = {}
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <div className="content-container">
                    <div className="left-container">
                        <AddArticle />
                        <AllArticles />
                    </div>
                    <div className="right-container">
                        <Notepad />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;