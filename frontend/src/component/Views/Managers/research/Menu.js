import React, {useEffect, useState} from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import TimelineIcon from "@material-ui/icons/Timeline";

// import Drawer from "../../../Drawer";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme =>({

    drawerItem: {
        color: "white",
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }

    },
    drawerItemSelected:{
        opacity: 1
    }

}))

function Menu(props) {
    const classes = useStyles()

    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const routes = [
        {name: "Dashboard", icon: <ListItemIcon ><DashboardIcon/></ListItemIcon>, link: "/drawer/dashboard", activeIndex: 0},
        {name: "Team", icon: <ListItemIcon><GroupIcon/></ListItemIcon>, link: "/drawer/hello", activeIndex: 1},
        {name: "Project", icon:<ListItemIcon><AccountTreeIcon/></ListItemIcon>, link: "/drawer/project", activeIndex: 2},
        {name: "Analytics", icon: <ListItemIcon><TimelineIcon/></ListItemIcon>, activeIndex: 3},
    ]
    useEffect(()=> {

        [...routes].forEach(route => {
            switch(window.location.pathname){
                case `${route.link}`:
                    if(route.activeIndex !== selectedMenuItem){
                        setSelectedMenuItem(route.activeIndex);
                    }
            }
        })

    },[selectedMenuItem]);
    return (
        <div>
            <List disablePadding>
                {routes.map((route, index) => (

                        <ListItem button
                                  className={selectedMenuItem === route.activeIndex ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                                  key={index}
                                  onClick={(e) => { setSelectedMenuItem(route.activeIndex); props.setOpenMobileDrawer(false)}}
                                  selected={route.activeIndex===selectedMenuItem}
                                  component={Link}
                                  to={route.link}
                        >
                            {route.icon}
                            <ListItemText >{route.name}</ListItemText>
                        </ListItem>


                ))}

            </List>
            {/*<Drawer routes={routes}/>*/}
        </div>
    );
}

export default Menu;