import React from 'react';
import { Card, CardContent, Container, Grid, Box, Avatar, Tab, Tabs, Typography, Checkbox, FormControlLabel, TextField, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton, FormGroup } from '@mui/material';
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

export default function Register() {
  const [tabvalue, setTabValue] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleUserSubmit = (event) => {
    event.preventDefault();
    console.log("dsdg======");
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  const handleAdminSubmit = (event) => {
    event.preventDefault();
    console.log("=========dsdg");
  };
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
                  Sign up
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
                  <Box component="form" noValidate onSubmit={handleUserSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="I want to receive inspiration"
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className='signupcss'
                    >
                      Sign Up
                    </Button>
                    <Grid container spacing={1} justifyContent="flex-end">
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
                      <Grid item xs={12} textAlign="center">
                        <Link href="#" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabvalue} index={1}>
                  <Box component="form" noValidate onSubmit={handleAdminSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="I want to receive inspiration"
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className='signupcss'
                    >
                      Sign Up
                    </Button>
                    <Grid container spacing={1} justifyContent="flex-end">
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
                      <Grid item xs={12} textAlign="center">
                        <Link href="#" variant="body2">
                          Already have an account? Sign in
                        </Link>
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
