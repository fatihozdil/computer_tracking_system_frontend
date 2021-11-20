import React from 'react';
import classes from './SideBar.module.scss';
import NavigationText from '../NavigationItems/NavigationItem/NavigationItem';
const SideBar = (props) => {
    //display side bar when clicked drawerToggle
    //define variables for dynamic classnames to display side bar 
    let sideBar = classes.SideBar_hide;
    
    if (props.isVisible === 1) 
        sideBar = `${classes.SideBar_hide} ${classes.Sidebar_show}`;

    return(
            <div className={sideBar} ref={props.ref1}>
                <div className={classes.title}>
                    <h4>Hoşgeldiniz</h4>
                    <h3>Fatih Özdil</h3>
                </div>
                <ul className={classes.Texts}>
                    <NavigationText link="/">
                        Bildirilen Problemler 
                    </NavigationText>
                    <NavigationText link="/computers">
                        Bilgisayarlar 
                    </NavigationText>
                    <NavigationText link="/users">
                        Kullanıcılar 
                    </NavigationText>
                </ul>
            </div>
    )
}
export default SideBar;
