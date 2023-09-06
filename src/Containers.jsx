import { Grid, Typography,Paper, makeStyles, Button, createTheme, ThemeProvider } from '@mui/material'
import { Box, Container, Stack, display, height, typography } from '@mui/system'
import React from 'react'

const theme = createTheme()

theme.typography.h3 = {
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')] : {
        fontSize: '4rem'
    }
}


export const Containers = () => {
    return (
      <Container fixed maxWidth='lg' sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}} >
          <Typography variant='h3' component={'h2'} color={'white'} >
            Nuestros proyectos
          </Typography>
          <ThemeProvider theme={theme} >
          <Grid mt={2} container spacing={3}>
          <Grid item xs={12} >
              <Paper elevation={12} sx={{height:{xs:200, md:300,background:'-webkit-linear-gradient(to right, #5c258d, #4389a2)',
              background: '#5c258d',
              background:'linear-gradient(to right, #5c258d, #4389a2)',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'start',
            }}} >
                <Box m={{xs:2,sm:3,md:5}}>
                  <Typography variant='h3' >
                      Algo de info aca
                  </Typography>
                  <Typography variant='h6' >
                      info mini aca
                  </Typography>
                  <Box display={{xs:'none',small:'none',md:'block'}} >
                    <Button variant='contained' >
                        Y este boton que hace algo
                    </Button>
                  </Box>
                </Box>
              </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{
            }} >
              <Paper elevation={12} sx={{height:{xs:200, md:250,
            background:'-webkit-linear-gradient(to right, #5c258d, #4389a2)',
            background: '#5c258d',
            background:'linear-gradient(to right, #5c258d, #4389a2)',
            }}} >
                  <Typography>
                      Holis
                  </Typography>
              </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={12} sx={{height:{xs:200, md:250,
            background:'-webkit-linear-gradient(to right, #5c258d, #4389a2)',
            background: '#5c258d',
            background:'linear-gradient(to right, #5c258d, #4389a2)',
            
            }}} >
                  <Typography>
                      Holis
                  </Typography>
              </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={4} >
              <Paper elevation={12} sx={{height:{xs:200, md:250,
            background:'-webkit-linear-gradient(to right, #5c258d, #4389a2)',
            background: '#5c258d',
            background:'linear-gradient(to right, #5c258d, #4389a2)',
            }}} >
                  <Typography>
                      Holis
                  </Typography>
              </Paper>
          </Grid>
      </Grid>
          </ThemeProvider>

      </Container>
    )
  }
  