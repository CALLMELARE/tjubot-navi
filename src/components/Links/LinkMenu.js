import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import linksConfig from '../../custom/links.json';
import Chip from '@material-ui/core/Chip';
import '../../style/Links.scss';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let tabs = [], panels = [];
    if (linksConfig) {
        let data = linksConfig.links;
        for (let i = 0; i < data.length; i++) {
            let icons = [];
            tabs.push(<Tab label={data[i].title} {...a11yProps(i)} />)
            for (let j = 0; j < data[i].children.length; j++) {
                icons.push(
                    // <Chip label={data[i].children[j].name} />
                    <Chip label={data[i].children[j].name} component="a" href={data[i].children[j].url} clickable />
                )
            }
            panels.push(<TabPanel value={value} index={i} className="tab-panel" >
                {icons}
            </TabPanel>)
        }
    }
    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                // variant="scrollable"
                // scrollButtons="auto"
                // aria-label="scrollable auto tabs example"
                centered
            >
                {tabs}
            </Tabs>
            {panels}
        </div>
    );
}

export default class LinkMenu extends Component {


    render() {
        return (
            <div className="links-menu">
                <ScrollableTabsButtonAuto />
            </div>
        )
    }
}