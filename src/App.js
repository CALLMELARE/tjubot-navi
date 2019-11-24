import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Links from './components/Links/Links';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


var Watermark = " _____       _   _   _   _____   _____   _____  \n|_   _|     | | | | | | |  _  \\ /  _  \\ |_   _| \n  | |       | | | | | | | |_| | | | | |   | |   \n  | |    _  | | | | | | |  _ <  | | | |   | |   \n  | |   | |_| | | |_| | | |_| | | |_| |   | |   \n  |_|   \\_____/ \\_____/ |_____/ \\_____/   |_|   ";

class App extends Component {
  render() {
    console.log(Watermark);
    return (
      <ThemeProvider>
        <div className="App" >
          <Header />
          <Search />
          <Links />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
