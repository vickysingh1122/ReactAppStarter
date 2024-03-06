import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import { Card, CardContent } from '@mui/material';


function Chart() {
    useEffect(() => {
        Highcharts.chart('container', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Graphical Interface for Cases'
            },
            tooltip: {
                valueSuffix: ''
            },
            // subtitle: {
            //     text:
            //         'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
            // },
            credits: {
                enabled: false  // Disable Highcharts credits
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: true,
                        distance: 20
                    }, {
                        enabled: true,
                        distance: -50,
                        format: '{point.percentage:.1f}%',
                        style: {
                            fontSize: '1.5rem',
                            textOutline: 'none',
                            opacity: 0.7,
                            color:"white",
                            fontWeight:"bold"
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }]
                }
            },
            series: [
                {
                    name: 'Cases',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Total Cases',
                            y: 200,
                            color: '#5e35b1',
                            dataLabels: {
                                style: {
                                    fontSize: '14px' // Set the font size for data labels of this series
                                }
                            }
                        },
                        {
                            name: 'Closed Cases',
                            // sliced: true,
                            // selected: true,
                            y: 130,
                            color: '#f38a6a',
                            dataLabels: {
                                style: {
                                    fontSize: '14px' // Set the font size for data labels of this series
                                }
                            }
                        },
                        {
                            name: 'Open Cases',
                            y: 70,
                            color: '#1e88e5',
                            dataLabels: {
                                style: {
                                    fontSize: '14px' // Set the font size for data labels of this series
                                },
                            }
                        }
                    ]
                }
            ],
        });
    }, []);


    return (
        <div class="highcharts-figure">
            <Card>
                <CardContent className='chartbg'>
                    <div id="container"></div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Chart