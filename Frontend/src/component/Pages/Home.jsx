import React from 'react';
import { Box, Button, CardActions, Container, Stack, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Chart from './Chart';
import ListCases from './ListCases';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Home() {
    return (
        <React.Fragment>
            <div sx={{paddingBottom:"30px",paddingTop:"20px"}} className='homecss' >
                <Box component="section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card component={Stack} className='topCardUI topcardbgone' >
                                <CardContent>
                                    <Typography>
                                        Total cases
                                    </Typography>
                                    <Typography>
                                        200
                                    </Typography>

                                </CardContent>
                                <CardActions sx={{ justifyContent: 'flex-end' }} >
                                    <Button size="small" className='topbarbtn'>
                                        <span>Total cases</span>  <ArrowCircleRightIcon />
                                    </Button>

                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card component={Stack} className='topCardUI topcardbgtwo'>
                                <CardContent>
                                    <Typography>
                                        Closed cases
                                    </Typography>
                                    <Typography>
                                        130
                                    </Typography>

                                </CardContent>
                                <CardActions sx={{ justifyContent: 'flex-end' }} >
                                    <Button size="small" className='topbarbtn'>
                                        <span>Closed cases</span> <ArrowCircleRightIcon />
                                    </Button>

                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card component={Stack} className='topCardUI topcardbgthree'>
                                <CardContent>
                                    <Typography>
                                        Open cases
                                    </Typography>
                                    <Typography>
                                        70
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'flex-end' }} >
                                    <Button size="small" className='topbarbtn'>
                                        <span>Open cases</span> <ArrowCircleRightIcon />
                                    </Button>

                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Chart />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ListCases />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </React.Fragment>
    )
}

export default Home;