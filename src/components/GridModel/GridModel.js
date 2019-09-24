import React from "react";
import Grid from '@material-ui/core/Grid';

const GridModel = props =>

    <Grid {...props}>
        {props.children}
    </Grid>

export default GridModel;