import { Grid, Paper, Typography } from '@mui/material'
import { Box, Container, Stack, borderColor } from '@mui/system'
import React from 'react'
import { Containers } from './Containers'

import { MiddlePage } from './MiddlePage'



export const Proyects = () => {
  return (
    <>
    <Container fixed maxWidth='xl' sx={{mt:{xs:10,md:15}}} >
      <Containers/>
    </Container>
    </>
  )
}
