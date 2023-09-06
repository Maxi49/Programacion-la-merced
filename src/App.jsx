
import { Container, palette } from '@mui/system';
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Title } from './Title';
import { Grid } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { MiddlePage } from './MiddlePage';
import { Proyects } from './Proyects';



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
