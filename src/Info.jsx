import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Info = (text1,text2) => {
  const hola = text1
  return (
    <>
      <Box >
        <Paper elevation={24} square sx={{
        backgroundColor:'black',
        borderStyle:'solid',
        borderColor:'white',
        borderWidth:'1px',
        width:{xs:200,md:300},
        height:{xs:200,md:300},
        mb:{xs:1,md:10},
        mt:{xs:3,md:10},
    }}>
            <Typography variant='h4' sx={{color:'white',}} >
            </Typography>
        </Paper>   
    </Box>    
    <Box>
        <Paper elevation={24} square sx={{
        backgroundColor:'black',
        borderStyle:'solid',
        borderColor:'white',
        borderWidth:'1px',
        width:{xs:200,md:300},
        height:{xs:200,md:300},
        mb:{xs:1,md:10},
        mt:{xs:3,md:10},
    }}>
          <Typography variant='h4' sx={{color:'white'}} >
            
          </Typography>
        </Paper>   
    </Box>
    </>

    
  )
}
