import react from 'react';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
const Toolbar = () => {

    return (
        <nav className={classes.navbar}>
            <div>
                <DrawerToggle/> 
            </div>
             <NavigationItems/>
        </nav>
    )
}
export default Toolbar;
