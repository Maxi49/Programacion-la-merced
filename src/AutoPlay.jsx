import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button, Card, Grid, Stack, Typography,Paper,createTheme } from "@mui/material";
import { Container, ThemeProvider, height, margin, width } from "@mui/system";
import '../styles/styles.css'

const theme = createTheme();

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

theme.typography.h3 = {
  fontSize: '1.7rem',
  [theme.breakpoints.up('md')] : {
      fontSize: '4rem'
  },
  fontFamily: [
      'Poppins'
  ]
}

import React, { Component } from "react";
import Slider from "react-slick";
import { grey } from "@mui/material/colors";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      arrows:false,
      cssEase: "linear",
      pauseOnHover: true,
      
      responsive: [
        {
          breakpoint: 768, // punto de interrupción desde donde se empezará a aplicar esta configuración
          settings: {
            slidesToShow: 1, // se muestran solo una imagen en pantallas pequeñas
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Paper sx={{pb:10,backgroundColor:' '}}>
            <Box sx={{display:'column',justifyContent:'center',alignItems:'center',mt:10,ml:{xs:0,md:5}
      }}>
        <ThemeProvider theme={theme} >
        <Typography variant="h3" mb={2}>Grandiosa Comunidad</Typography>
        <Slider {...settings}>
          <Box >
            <img className="img-responsive" src="../Public/fotosTaller/YO.jpg"/>
          </Box>
          <Box>
            <img className="img-responsive" src="../Public/fotosTaller/unacompu.jpg" alt="" />
          </Box>
          <Box>
            <img className="img-responsive" src="../Public/fotosTaller/paz.jpg" alt="" />
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} >
            <img className="img-responsive" src="../Public/fotosTaller/aleInCelphonebro.jpg" alt="" />
          </Box>
        </Slider> 
        </ThemeProvider>
        
      </Box>
      </Paper>
    
        
    );
  }
}


