import React, { Component } from 'react';
import '../../style/Header.scss';
import { Icon, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GithubIcon from '@material-ui/icons/GitHub';
import Logo from '../../img/logo.png';
import Shield from '../../img/shield.png';
import themeConfig from '../../ThemePicker.json';


export default class Header extends Component {

    render() {
        console.log(themeConfig)
        const wid = window.innerWidth;
        return (
                <div className="header-container">
                    <div className="left-menu">
                        <img className="header-logo" src={Shield} />
                        <img className="header-logo" src={Logo} />
                    </div>
                    <div className="right-menu">
                        <IconButton edge="end" className="header-github"><GithubIcon /></IconButton>
                    </div>
                </div>
        )
    }
}