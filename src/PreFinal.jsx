import { Grid, Paper, Typography } from '@mui/material'
import { Box, Container, Stack, borderColor } from '@mui/system'
import React from 'react'
import { Info } from './info'



export const PreFinal = () => {
  return (
    <Container  maxWidth='lg' sx={{mt:{xs:10,md:15}}} >
        <Grid container sx={{display:'flex',flexDirection:'row',
    justifyContent:'space-evenly'}} >
            <Box>
                <Typography variant='h5' sx={{color:'white'}} component={'h3'} >
                    Que habilidades se logran en este curso?
                </Typography>
            </Box>
            <Grid item xs={12} md={3} marginLeft={{xs:0,md:20}} sx={{display:'flex',flexDirection:'row',}} >
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{xs:1,md:3}} useFlexGap >
                    <Info/>
                </Stack>
            </Grid>
            <Box>
                <Typography variant='h5' sx={{color:'white'}} component={'h3'} >
                    Que habilidades se logran en este curso?
                </Typography>
            </Box>
            <Grid item xs={12} md={3} marginLeft={{xs:0,md:20}} sx={{display:'flex',flexDirection:'row',}} >
                <Stack direction={{ xs: 'column',sm:'column', md: 'column',lg:'row' }} spacing={{xs:1,md:3}} useFlexGap >
                    <Info/>
                </Stack>
            </Grid>
        </Grid>
    </Container>
  )
}
