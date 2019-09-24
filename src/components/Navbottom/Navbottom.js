import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import "./Navbottom.css"

const Navbottom = props => (
    <BottomNavigation {...props}>
        {props.children}
    </BottomNavigation>
)

export default Navbottom;