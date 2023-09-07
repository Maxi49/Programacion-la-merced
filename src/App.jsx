
import { Container, palette } from '@mui/system';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Title } from './Title';
import { CssBaseline, Grid, useMediaQuery } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { MiddlePage } from './MiddlePage';
import { Proyects } from './Proyects';
import React from 'react';


export const App = () => {
 
  return (
    <>
      <ResponsiveAppBar/>
      <Container fixed maxWidth='xl' >
        <Grid container sx={{
          display:'flex',
          justifyContent:'center',
        }}>
          <Title/>
          <MiddlePage/>
          <Proyects/>
        </Grid>
      </Container>
  </>

  )
}
