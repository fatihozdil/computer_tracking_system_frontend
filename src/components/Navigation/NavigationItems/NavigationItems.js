import React from 'react';
import classes from './NavigationItems.module.scss';
import logo from '../../../assets/enformatikLogo.png';

const NavigationItems = () => {

    return ( 
        <div className={classes.navigationItems }>
            <h2 className={classes.title}>Enformatik Bölüm Başkanlığı</h2>
        
            <img className={classes.img} src={logo} alt="logo"/ > 
        </div>
    )
}

export default NavigationItems;
