import * as React from 'react';
import '../styles/styles.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import '../styles/styles.css'
const theme = createTheme()

theme.typography.h1 = {
  fontSize: '2.5rem',
  [theme.breakpoints.up('sm')] : {
    fontSize: '3rem'
  },
  [theme.breakpoints.up('md')] : {
      fontSize: '3rem'
  },
  [theme.breakpoints.up('lg')] : {
    fontSize: '5rem'
},
  fontFamily: [
      'Poppins'
  ]
}

theme.typography.h2 = {
  fontSize: '3rem',
  [theme.breakpoints.up('sm')] : {
    fontSize: '3.4rem'
  },
  [theme.breakpoints.up('md')] : {
      fontSize: '4rem'
  },
  [theme.breakpoints.up('lg')] : {
    fontSize: '6rem'
  },
  fontFamily: [
      'Poppins'
  ]
}

export function MiddlePage() {
  return (
      <Stack sx={{
        display:'flex',
        width:'100%',
        justifyContent:'space-evenly',
        mt:{xs:3,md:12},
        gap:{xs:3,sm:5,md:10,lg:10}
      }} direction={{ xs: 'column', sm: 'column',md:'row' }}>
        <ThemeProvider theme={theme} >
            <Typography
            sx={{ mt: 9,mb:{xs:3,md:0},pl:{xs:2.5,md:0,lg:0} }}
            variant="h1"
            color={'white'}
            component={'h2'}
            >
            Unite al Taller.
            </Typography>
            <Grid item sx={{p:{xs:2.5}}}>
            <ThemeProvider theme={theme} >
            <Typography
              variant='h2'
              sx={{
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                color: 'transparent',
                backgroundColor: lightBlue[400],
                backgroundClip: 'text',
              }}
              component={'h3'}
            >
              45.5hs+
            </Typography>
              <Typography color={'#C4C4C4'} variant="h6">
                Duracion del curso
              </Typography>
            <Typography
             variant='h2'
              sx={{
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                color: 'transparent',
                backgroundColor: lightBlue[400],
                backgroundClip: 'text',
                marginTop:3
              }}
              
              component={'h3'}
            >
              Ilimitada
            </Typography>
              <Typography color={'#C4C4C4'} variant="h6">
                Capacidad de estudiantes
              </Typography>
            <Typography
             variant='h2'
              sx={{
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                color: 'transparent',
                backgroundColor: lightBlue[400],
                backgroundClip: 'text',
                marginTop:3
              }}
              component={'h3'}
            >
              $5000
            </Typography>
              <Typography color={'#C4C4C4'} variant="h6">
                Pago Mensual (puede subir trimestralmente)
              </Typography>
            </ThemeProvider>
          </Grid>
          </ThemeProvider>
      </Stack>
  );
}
