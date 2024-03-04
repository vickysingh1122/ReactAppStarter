import React from 'react';
import SidebarBox from '../Sidebar/Sidebar';
import Home from '../Pages/Home';
import { Box, Container, Paper } from '@mui/material';
import Header from '../Header/Header';

function Overview() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Paper>
                <SidebarBox />
            </Paper>
            <Paper sx={{ width: '100%' }}>
                <Header />
                <Home />
            </Paper>
        </Box>
    )
}

export default Overview;