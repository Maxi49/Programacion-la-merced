
import { Container, palette } from '@mui/system';
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Title } from './Title';
import { Grid } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { MiddlePage } from './MiddlePage';
import { PreFinal } from './PreFinal';


export const App = () => {
  return (
    <>
      <ResponsiveAppBar/>
        <Container fixed>
        <Grid container sx={{
          display:'flex',
          justifyContent:'center',
        }}>
          <Title/>
          <MiddlePage/>
          <PreFinal/>
        </Grid>
      </Container>
    </>

  )
}
