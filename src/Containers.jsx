import { Grid, Typography,Paper, makeStyles, Button, createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import { Box, Container, Stack, display, height, typography } from '@mui/system'
import React from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { deepPurple, grey,blue, purple,lightBlue,pink } from '@mui/material/colors';


const theme = createTheme()

theme.typography.h1 = {
  fontSize: '2.2rem',
  [theme.breakpoints.up('sm')] : {
    fontSize: '3rem'
  },
  [theme.breakpoints.up('md')] : {
      fontSize: '4.5rem'
  },
  [theme.breakpoints.up('lg')] : {
    fontSize: '5rem'
},
  fontFamily: [
      'Poppins'
  ]
}

theme.typography.h3 = {
    fontSize: '1.7rem',
    [theme.breakpoints.up('md')] : {
        fontSize: '4rem'
    },
    fontFamily: [
        'Poppins'
    ]
}
theme.typography.h4 = {
  fontSize: '1.4rem',
  [theme.breakpoints.up('md')] : {
      fontSize: '2rem'
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
    
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const themeDark = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
    );

    return (
        <>
        <ThemeProvider theme={theme} >
            <Typography variant='h1' component={'h2'} color={'white'} >
            Nuestros proyectos
            </Typography>
            <Grid mt={2} container spacing={3}>
            <Grid item xs={12} >
                <Paper elevation={12} sx=
            {{height:{xs:200,md:300,
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'start',
              background: 'linear-gradient(to top,#0047FF,#00BCD4);'
            }}} >
              <Box m={{xs:2,sm:3,md:5}}>
                  <Typography variant='h3' >
                      Coleccion de proyectos
                  </Typography>
                  <Typography mt={1} variant='h5' >
                      info mini aca
                  </Typography>
                  <Box mt={2} >
                    <ArrowCircleRightOutlinedIcon fontSize='large' />
                  </Box>
                </Box>
              </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={12} sx={{height:{xs:200, md:250,
              background: 'linear-gradient(to bottom,#0047FF,#00BCD4);',
              display:'flex',
              flexDirection:'row',
              alignItems:'end',
            }}} >
              <Box  m={{xs:2,md:3}} >
                  <Typography variant='h4' sx={{mb:1}} >
                  otro proyecto aca
                  </Typography>
                  <ArrowCircleRightOutlinedIcon fontSize='large'  />
              </Box>
              </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={12} sx={{height:{xs:200, md:250,
              background: 'linear-gradient(to bottom,#0047FF,#00BCD4);',
              display:'flex',
              flexDirection:'row',
              alignItems:'end',
            }}} >
              <Box m={{xs:2,md:3}} >
                  <Typography variant='h4' sx={{mb:1}} >
                  otro proyecto aca
                  </Typography>
                  <ArrowCircleRightOutlinedIcon fontSize='large'  />
              </Box>
              </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={4} >
              <Paper elevation={12}  sx={{height:{xs:200,   md:250,
                    background: 'linear-gradient(to bottom,#0047FF,#00BCD4);',
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'end'
                }}} >
                  <Box  m={{xs:2,md:3}} >
                    <Typography sx={{mb:1}} variant='h4' >
                  otro proyecto aca
                    </Typography>
                    <ArrowCircleRightOutlinedIcon fontSize='large' />
                  </Box>
              </Paper>
          </Grid>
      </Grid>
    </ThemeProvider>
        </>
    )
}
  