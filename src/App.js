import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';


var Watermark = " _____       _   _   _   _____   _____   _____  \n|_   _|     | | | | | | |  _  \\ /  _  \\ |_   _| \n  | |       | | | | | | | |_| | | | | |   | |   \n  | |    _  | | | | | | |  _ <  | | | |   | |   \n  | |   | |_| | | |_| | | |_| | | |_| |   | |   \n  |_|   \\_____/ \\_____/ |_____/ \\_____/   |_|   ";

class App extends Component {
  render() {
    console.log(Watermark);
    return (
      <div className="App" >
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
