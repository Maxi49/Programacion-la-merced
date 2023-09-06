import { Grid, Typography,Paper, makeStyles } from '@mui/material'
import { Box, Container, Stack, height } from '@mui/system'
import React from 'react'

export const Containers = () => {
    return (
      <Container fixed maxWidth='lg' sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}} >
          <Typography variant='h3' component={'h2'} color={'white'} >
            Nuestros proyectos
          </Typography>
          <Grid mt={2} container spacing={3}>
          <Grid item xs={12}>
              <Paper elevation={12} sx={{height:{xs:200, md:250,background:'-webkit-linear-gradient(to right, #5c258d, #4389a2)',
              background: '#5c258d',
              background:'linear-gradient(to right, #5c258d, #4389a2)',
            }}} >
                  <Typography>
                      Holis
                  </Typography>
              </Paper>
          </Grid>
          <Grid item xs={6} md={6} lg={4} sx={{

                

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
          <Grid item xs={6} md={6} lg={4}>
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
      </Container>
    )
  }
  