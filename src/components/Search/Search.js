import React, { Component } from 'react';
import '../../style/Search.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            keyWord: null,
        }
    }

    randomBackground = () => {
        //随机渐变色背景
        var randum = function (max) {
            //产生随机数
            return Math.round(Math.random() * max);
        }

        var hexify = function (x) {
            //转为16进制
            return ('0' + parseInt(x).toString(16)).slice(-2);
        }

        var randex = function () {
            //生成HEX颜色
            return '#' + hexify(randum(100) + 100) + hexify(randum(100) + 100) + hexify(randum(100) + 100);
        };

        var blender = function () {
            if (!!Math.round(Math.random())) {
                return 'radial-gradient(circle at ' + randum(100) + '% ' + randum(100) + '%, ' + randex() + ', ' + randex() + ')';
            } else {
                return 'linear-gradient(' + randum(360) + 'deg, ' + randex() + ', ' + randex() + ')';
            }
        };
        let i = blender();
        let randomBg = {
            backgroundImage: i,
        }
        return randomBg;
    }

    handleInputChandge = (e) => {
        this.setState({
            keyWord: e.target.value
        })
    }

    handleGo = () => {
        let keyWord=
        window.location = `https://www.baidu.com/s?wd=${keyWord}`;
    }

    render() {
        return (
            <div className="search-container" style={this.randomBackground()}>
                <span className="search-title focus-in-contract-bck">TJUBOT导航</span>
                <form className="search-input-group">
                    <TextField onChange={this.handleInputChandge.bind(this)} id="search-input" variant="outlined" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }} />
                    <Button name="searchButton" id="search-button" onClick={this.handleGo} variant="outlined">Go!</Button>
                </form>
            </div>
        )
    }
}