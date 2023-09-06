import * as React from 'react';
import '../styles/styles.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export function MiddlePage() {
  return (
      <Stack sx={{
        display:'flex',
        mt:{xs:3,md:12},
        gap:{xs:0,sm:7,md:10}
      }} direction={{ xs: 'column', sm: 'row' }}>
        <Grid item>
          <Typography
            sx={{ mt: 9,mb:{xs:3,md:0} }}
            variant="h3"
            color={'white'}
            component={'h2'}
          >
            Unite al Taller.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction={'column'}>
            <Typography
              sx={{
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                color: 'transparent',
                backgroundImage: 'linear-gradient(to right, #19FB9B, #8C01FA)',
                backgroundClip: 'text',
                fontSize:{xs:70,md:100},

              }}
              component={'h3'}
            >
              45.5hs+
            </Typography>
              <Typography color={'#C4C4C4'} variant="h6">
                Duracion del curso
              </Typography>
            <Typography
              sx={{
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                color: 'transparent',
                backgroundImage: 'linear-gradient(to right, #0047FF, #00BCD4)',
                backgroundClip: 'text',
                fontSize:{xs:70,md:100},
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
              sx={{
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                color: 'transparent',
                backgroundImage: 'linear-gradient(to right, #00FFBD, #025B8C)',
                backgroundClip: 'text',
                fontSize:{xs:70,md:100},
                marginTop:3
              }}
              component={'h3'}
            >
              $5000
            </Typography>
              <Typography  color={'#C4C4C4'} variant="h6">
                Pago Mensual ( puede subir trimestralmente )
              </Typography>
          </Grid>
        </Grid>
      </Stack>
  );
}
