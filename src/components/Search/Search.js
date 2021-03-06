import React, { Component } from 'react';
import '../../style/Search.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

function PositionedSnackbar() {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = newState => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <div>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                open={open}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">I love snacks</span>}
            />
        </div>
    );
}

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            keyWord: null,
            initial: false,
            color: null,
            username: null,
        }
    }



    componentDidMount() {
        if (!this.state.initial) {
            let temp = this.randomBackground();
            this.setState({
                color: temp,
                initial: true,
            })
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
        var theEvent = window.event || e;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            this.handleGo();
        }
        this.setState({
            keyWord: e.target.value
        })
    }

    getTimeState = () => {
        let timeNow = new Date();
        console.log(timeNow)
        let hours = timeNow.getHours();
        let text = ``;
        if (hours >= 0 && hours <= 10) {
            text = `早上好`;
        } else if (hours > 10 && hours <= 14) {
            text = `中午好`;
        } else if (hours > 14 && hours <= 18) {
            text = `下午好`;
        } else if (hours > 18 && hours <= 24) {
            text = `晚上好`;
        }
        return text;
    }

    handleGo = () => {
        if (this.state.keyWord) {
            window.location = `https://wiki.tjubot.cn/search/${this.state.keyWord}`;
            // window.location = `https://www.baidu.com/s?wd=${this.state.keyWord}`;
        } else {
            return (
                <Snackbar
                    anchorOrigin={'top', 'center'}
                    open={true}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"></span>}
                />
            )
        }
    }

    getSearchData(event) {
        event.preventDefault();
        this.handleGo();
    }

    render() {

        return (
            <div className="search-container" style={this.state.color}>
                <span className="search-title focus-in-contract-bck">{this.state.username ? this.state.username + "," + this.getTimeState() : this.getTimeState()}</span>
                <form className="search-input-group" onSubmit={(e) => this.getSearchData(e)}>
                    <TextField  placeholder="在北洋维基中搜索" onChange={this.handleInputChandge.bind(this)} id="search-input" variant="outlined" InputProps={{
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