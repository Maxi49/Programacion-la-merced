import * as React from 'react';
import '../styles/styles.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme()

theme.typography.h1 = {
  fontSize: '2rem',
  [theme.breakpoints.up('md')] : {
      fontSize: '5rem'
  },
  fontFamily: [
      'Poppins'
  ]
}

theme.typography.h2 = {
  fontSize: '3rem',
  [theme.breakpoints.up('md')] : {
      fontSize: '4.5rem'
  },
  fontFamily: [
      'Poppins'
  ]
}

export function MiddlePage() {
  return (
      <Stack sx={{
        display:'flex',
        mt:{xs:3,md:12},
        gap:{xs:0,sm:7,md:20}
      }} direction={{ xs: 'column', sm: 'row' }}>
        <Grid item>
          <ThemeProvider theme={theme} >
            <Typography
            sx={{ mt: 9,mb:{xs:3,md:0} }}
            variant="h2"
            color={'white'}
            component={'h2'}
            >
            Unite al Taller.
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item>
          <Grid container direction={'column'}>
            <ThemeProvider theme={theme} >
            <Typography
              variant='h2'
              sx={{
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                color: 'transparent',
                backgroundImage: 'linear-gradient(to right, #19FB9B, #8C01FA)',
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
                backgroundImage: 'linear-gradient(to right, #0047FF, #00BCD4)',
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
                backgroundImage: 'linear-gradient(to right, #00FFBD, #025B8C)',
                backgroundClip: 'text',
                marginTop:3
              }}
              component={'h3'}
            >
              $5000
            </Typography>
              <Typography  color={'#C4C4C4'} variant="h6">
                Pago Mensual ( puede subir trimestralmente )
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Stack>
  );
}
