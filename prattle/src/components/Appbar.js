import React from 'react'
import { AppBar, Typography,Toolbar } from '@mui/material'

const drawerWidth = 240;
export default function Appbar() {
        return (
            <div>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
            <Toolbar>
                {/* TODO: Make channel name prop */}
            <Typography variant="h6" noWrap component="div" > 
                Prattle
            </Typography>
            </Toolbar>
            </AppBar>
            </div>
        );
}
