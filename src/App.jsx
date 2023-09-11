
import { Container} from '@mui/system';
import { Title } from './Title';
import { Grid } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { MiddlePage } from './MiddlePage';
import React from 'react';
import AutoPlay from './AutoPlay';

import '../styles/styles.css'
import { Containers } from './Containers';
import { Footer } from './Footer';

export const App = () => {

  return (
    <div>
      <ResponsiveAppBar/>
      <Container fixed maxWidth='xl' >
        <Grid container sx={{
          display:'flex',
          justifyContent:'center',
        }}>
          <Title/>
          <MiddlePage/>
          <Container fixed maxWidth='xl' sx={{mt:{xs:10,md:15}}} >
            <Containers/>
          </Container>
        </Grid>
      </Container>
      <AutoPlay/>
      <Footer/>
  </div>

  )
}
