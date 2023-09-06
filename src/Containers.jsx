import { Grid, Typography,Paper, makeStyles, Button, createTheme, ThemeProvider } from '@mui/material'
import { Box, Container, Stack, display, height, typography } from '@mui/system'
import React from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { deepPurple } from '@mui/material/colors';

const theme = createTheme()

theme.typography.h3 = {
    fontSize: '2rem',
    [theme.breakpoints.up('md')] : {
        fontSize: '4rem'
    },
    fontFamily: [
        'Poppins'
    ]
}
theme.typography.h5 = {
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')] : {
        fontSize: '2rem'
    },
    fontFamily: [
        'Poppins'
    ]
}


export const Containers = () => {
    return (
        <>
        <ThemeProvider theme={theme} >
            <Typography variant='h3' component={'h2'} color={'white'} >
            Nuestros proyectos
          </Typography>
          <Grid mt={2} container spacing={3}>
          <Grid item xs={12} >
              <Paper elevation={12} sx={{height:{xs:200, md:300,background:'-webkit-linear-gradient(to right, #5c258d, #4389a2)',
              background: '#5c258d',
              background:deepPurple[400],
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'start',
            }}} >
                <Box m={{xs:2,sm:3,md:5}}>
                  <Typography variant='h3' >
                      Coleccion de proyectos
                  </Typography>
                  <Typography mt={1} variant='h5' >
                      info mini aca
                  </Typography>
                  <Box mt={1} >
                    <ArrowCircleRightOutlinedIcon fontSize='large' />
                  </Box>
                </Box>
              </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{
            }} >
              <Paper elevation={12} sx={{height:{xs:200, md:250,
                                background:deepPurple[400],
            }}} >
                  <Typography>
                      otro proyecto aca
                  </Typography>
              </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={12} sx={{height:{xs:200, md:250,
                background: deepPurple[400],
             
            }}} >
                  <Typography>
                  otro proyecto aca
                  </Typography>
              </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={4} >
              <Paper elevation={12} sx={{height:{xs:200, md:250,
                    background:deepPurple[400],
            }}} >
                  <Typography>
                  otro proyecto aca
                  </Typography>
              </Paper>
          </Grid>
      </Grid>
          </ThemeProvider>

        </>
    )
}
  