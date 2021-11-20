import React from 'react';
import classes from './DrawerToggle.module.scss';
import UseComponentVisible from '../../../helpers/Dropdown';
import SideBar from '../SideBar/SideBar';

const DrawerToggle = (props) => {

    const { 
        ref,
        isComponentVisible,
        handleClick
    } = UseComponentVisible(false);

    return (
        
        <React.Fragment>
            <span
                 onClick={() => handleClick(1)}
                 className={`material-icons ${classes.menuIcon}`}>
            menu
            </span>
            <SideBar
                ref1={ref}
                isVisible={isComponentVisible}
            />
        </React.Fragment>
    )
}
export default DrawerToggle; 
