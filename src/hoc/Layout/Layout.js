import React from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.js';

const Layout = (props) => {

    return (
        <div className={classes.Layout} > 
            <div className={classes.header}>
                 <Toolbar/>
            </div> 
            <div className={classes.main}>
                 {props.children}
            </div>
        </div>
    )
}
export default Layout;
