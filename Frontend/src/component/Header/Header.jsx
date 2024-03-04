import React from 'react';
import { Box } from '@mui/material';
import { Avatar, Stack } from '@mui/material';


function Header() {
    return (
        <div className='header'>
            <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" ,padding:"20px",marginBottom:"20px",boxShadow: 'rgba(0, 0, 0, 0.45) 0px 8px 19px -6px' , background:"#e6e9f8"}}>
                <div>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <span>Customer</span>
                    </Stack>
                </div>
            </Box>
        </div>
    )
}

export default Header;