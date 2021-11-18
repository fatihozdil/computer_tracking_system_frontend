import react from 'react';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems.js';

const Toolbar = () => {

    return (
        <nav className={classes.navbar}>
            <div>
                <span className="material-icons">
                    menu
                </span> 
            </div>
             <NavigationItems/>
        </nav>
    )
}
export default Toolbar;
