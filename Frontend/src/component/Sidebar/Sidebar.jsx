import React from 'react';
import NavRoute from '../NavTab/navtabjson';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { List, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Link} from '@mui/material';

function SidebarBox() {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <section className='sidebar' >
            {/* <div className='sidebar-box'>
                <div className="sidebar-header">
                    <img src='' alt='Logo image' className='img-fluid' />
                </div>
                <div className="sidebar-navtab">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav">
                        {
                            NavRoute.map((item, idx) => {
                                console.log(item);
                                return (
                                    <ListItemButton key={idx}>
                                        <ListItemIcon><DraftsIcon /></ListItemIcon>
                                        <ListItemText primary={item.state} />
                                    </ListItemButton>
                                )
                            })
                        }

                    </List>
                </div>

            </div> */}
            <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
                <Sidebar collapsed={collapsed}>
                    <Menu
                        menuItemStyles={{
                            button: {
                                // the active class will be added automatically by react router
                                // so we can use it to style the active menu item
                                [`&.active`]: {
                                    backgroundColor: '#13395e',
                                    color: '#b6c8d9',
                                },
                            },
                        }}
                    >
                        <MenuItem component={<Link to="/login" />}><DraftsIcon/> Login</MenuItem>
                        <MenuItem component={<Link to="/register" />}> <DraftsIcon/> Register</MenuItem>
                        <MenuItem component={<Link to="/home" />}> <DraftsIcon/>  Home</MenuItem>
                    </Menu>
                    <main style={{ padding: 10 }}>
                        <div>
                            <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
                                Collapse
                            </button>
                        </div>
                    </main>
                </Sidebar>

            </div>
        </section>
    )
}

export default SidebarBox;