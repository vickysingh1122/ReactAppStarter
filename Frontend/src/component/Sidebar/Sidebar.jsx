import React from 'react';
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from '@mui/material';
import logo from '../../assets/images/motologo.png';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

function SidebarBox() {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <section className='sidebar' >
            <div className='sidebar-box'>
                <div className="sidebar-header">
                    <img src={logo} alt='Logo image' className='img-fluid' style={{ width: "80%" }} />
                </div>
                {/* <div className="sidebar-navtab">
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
                </div> */}

            </div>
            <div style={{ display: 'flex', flexDirection:"column", height: '100%', minHeight: '400px' }}>
                {/* <Sidebar collapsed={collapsed} className='sidebarcss'>
                    <Menu
                        // menuItemStyles={{
                        //     button: {
                        //         // the active class will be added automatically by react router
                        //         // so we can use it to style the active menu item
                        //         [`&.active`]: {
                        //             backgroundColor: '#13395e',
                        //             color: '#b6c8d9',
                        //         },
                        //     },
                        // }}
                        className='menucss'
                    >
                        <MenuItem className='menuitemcss' component={<Link to="/login" />}><DraftsIcon/> Login</MenuItem>
                        <MenuItem className='menuitemcss' component={<Link to="/register" />}> <DraftsIcon/> Register</MenuItem>
                        <MenuItem className='menuitemcss' component={<Link to="/home" />}> <DraftsIcon/>  Home</MenuItem>
                    </Menu>
                    <main style={{ padding: 10 }}>
                        <div>
                            <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
                                Collapse
                            </button>
                        </div>
                    </main>
                </Sidebar> */}
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    className='buttondashboard'
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    Dashboard
                </Link>
                <Paper sx={{ width: 250, maxWidth: '100%', }} className='menuboxcss'>
                    <MenuList>
                        <MenuItem className='menuitemcss'>
                            {/* <ListItemIcon className='iconcolor'>
                                <ContentCut fontSize="small" />
                            </ListItemIcon> */}
                            <ListItemText>DashBoard View</ListItemText>

                        </MenuItem>
                        <MenuItem className='menuitemcss'>
                            {/* <ListItemIcon className='iconcolor'>
                                <ContentCopy fontSize="small" />
                            </ListItemIcon> */}
                            <ListItemText>List view of cases</ListItemText>

                        </MenuItem>

                        <Divider />

                    </MenuList>
                </Paper>

            </div>
        </section>
    )
}

export default SidebarBox;