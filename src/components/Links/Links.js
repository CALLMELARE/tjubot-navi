import React, { Component } from 'react';
import '../../style/Links.scss';
import LinkMenu from './LinkMenu';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
});

function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
        >
            <LinkMenu />
            <Button id="links-close" onClick={toggleDrawer('bottom', false)}><ArrowDownwardIcon /></Button>
        </div>
    );

    return (
        <div className="center">
            <Button id="links-open" onClick={toggleDrawer('bottom', true)}><ArrowUpwardIcon /></Button>
            <SwipeableDrawer
                anchor="bottom"
                open={state.bottom}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
            >
                {fullList('bottom')}
            </SwipeableDrawer>
        </div>
    );
}



export default class Links extends Component {

    render() {
        return (
            <div className="links-container">
                <SwipeableTemporaryDrawer />
            </div>
        )
    }
}