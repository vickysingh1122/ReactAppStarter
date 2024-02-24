import React from 'react';
import { Card, CardContent, Container, Grid, Box, Tab, Tabs, Typography,Avatar } from '@mui/material';
import { FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Login() {
  const [tabvalue, setTabValue] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleAdminSubmit = () => {
    console.log("gdfgdffd");
  }
  const handleClientSubmit = () => {
    console.log("gdfgdffd");
  }
  return (
    <React.Fragment>
      <Container maxWidth="sm" style={{ height: "100vh" }} className='containdisplay'>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} textAlign="center">
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{ margin: "auto" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In 
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ border: 1, borderColor: 'divider' }} >
                  <Tabs value={tabvalue} onChange={handleChange} className='tabcontent' aria-label="basic tabs example">
                    <Tab label="User" className='tabbtn' {...a11yProps(0)} />
                    <Tab label="Admin" className='tabbtn' {...a11yProps(1)} />
                  </Tabs>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <CustomTabPanel value={tabvalue} index={0}>
                  <Box component="form" noValidate onSubmit={handleClientSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControl sx={{ width: "100%" }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                          <OutlinedInput
                            id="email"
                            type={`text`}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle email visibility"
                                  edge="end"
                                >
                                  <MailOutlineIcon />
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Email"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl sx={{ width: "100%" }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                          <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormGroup>
                          <FormControlLabel required control={<Checkbox />} label="Remember Me" />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={6} textAlign={`right`}>
                        <Button size="medium">Forget Password ?</Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" size="medium" fullWidth className='signupcss'>
                          Login
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider>OR</Divider>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button variant="outlined" startIcon={<GoogleIcon />} fullWidth>
                          Login In The Google
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button variant="outlined" startIcon={<FacebookOutlinedIcon />} fullWidth>
                          Login In The Facebook
                        </Button>
                      </Grid>
                      <Grid item xs={12} textAlign={`center`}>
                        <span>Don't have an account ?</span> <Button size="medium">Register</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabvalue} index={1}>
                  <Box component="form" noValidate onSubmit={handleAdminSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControl sx={{ width: "100%" }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-adminemail">Admin Email</InputLabel>
                          <OutlinedInput
                            id="adminemail"
                            type={`text`}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle adminemail visibility"
                                  edge="end"
                                >
                                  <MailOutlineIcon />
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Admin Email"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl sx={{ width: "100%" }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-adminpassword">Admin Password</InputLabel>
                          <OutlinedInput
                            id="adminpassword"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle adminpassword visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Admin Password"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormGroup>
                          <FormControlLabel required control={<Checkbox />} label="Remember Me" />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={6} textAlign={`right`}>
                        <Button size="medium">Forget Password ?</Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" size="medium" fullWidth className='signupcss'>
                          Login
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider>OR</Divider>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button variant="outlined" startIcon={<GoogleIcon />} fullWidth>
                          Login In The Google
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button variant="outlined" startIcon={<FacebookOutlinedIcon />} fullWidth>
                          Login In The Facebook
                        </Button>
                      </Grid>
                      <Grid item xs={12} textAlign={`center`}>
                        <span>Don't have an account ?</span> <Button size="medium">Register</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CustomTabPanel>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  )
}
