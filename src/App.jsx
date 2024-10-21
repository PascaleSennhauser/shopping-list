import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Imprint from './components/Imprint/imprint';
import MainContent from './components/MainContent/mainContent';
import './App.css';

class App extends Component {
    state = {}
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainContent />}></Route>
                        <Route path='/imprint' element={<Imprint />}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;