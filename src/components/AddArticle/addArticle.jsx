import React, { Component } from 'react';
import './AddArticle.css';

class AddArticle extends Component {
    addItem = () => {
        // Den Namen direkt aus dem Eingabefeld abfragen
        let name = document.getElementById('articleName').value;
        if (name.trim()) { // Überprüfen, ob der Name nicht nur aus Leerzeichen besteht
            this.props.onAddItem(name); // Artikel hinzufügen
            document.getElementById('articleName').value = ''; // Eingabefeld zurücksetzen
        }
    }

    filterItem = () => {
        let name = document.getElementById('articleName').value;
        if (name.trim()) {
            this.props.filterItems(name);
        } else {
            this.props.filterItems(''); // Alle Artikel anzeigen, wenn das Feld leer ist
        }
    }

    render() { 
        return (
            <div>
                <h2>Search for an article</h2>
                <input 
                    id="articleName" 
                    onInput={this.filterItem} // Setze die Filter-Methode beim Eingeben
                />
                <button onClick={this.addItem}>Add article</button>
            </div>
        );
    }
}
 
export default AddArticle;