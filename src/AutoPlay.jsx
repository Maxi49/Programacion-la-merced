import Box from "@mui/material/Box";
import { Paper, createTheme } from "@mui/material";
import "../styles/styles.css";
const theme = createTheme();

import React, { Component } from "react";
import Slider from "react-slick";
import { Videos } from "./Videos";
import { AutoPlayText } from "./AutoPlayText";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1500,
      arrows: false,
      cssEase: "linear",
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 768, // punto de interrupción desde donde se empezará a aplicar esta configuración
          settings: {
            slidesToShow: 1, // se muestran solo una imagen en pantallas pequeñas
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Paper
          square
          elevation={24}
          sx={{
            height: '100%',
            pb: { xs: 5, md: 20 },
            pt: 3,
            mt: 20,
            //background: "radial-gradient(circle,#bdc3c7,#000000)",
            background: "radial-gradient(circle, rgb(7, 6, 6), rgb(7, 6, 6))",    
            boxShadow: "0.4px 0.4px 10px #ffff",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            ":hover": {
              borderColor: "#3a7bd5",
              backdropFilter: "blur(50px)",
              transition: "all 0.6s ease", // Ajusta la duración y el tipo de transición a tus necesidades
              boxShadow: `1px 1px 100px #3a7bd5`, // Ajusta los valores del box-shadow a tus necesidades
            },
          }}
        >
          <AutoPlayText />
          <Slider {...settings}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                ml: { xs: 2.5, sm: 1, md: 1, lg: 1 },
              }}
            >
              <img
                style={{ marginBottom: 50 }}
                className="img-responsive"
                src="../Public/fotosTaller/maxi.jpg"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                ml: { xs: 2.5, sm: 1, md: 1, lg: 1 },
              }}
            >
              <img
                style={{ marginBottom: 50 }}
                className="img-responsive"
                src="../Public/fotosTaller/compuLaMerced2.jpg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                ml: { xs: 2.5, sm: 1, md: 1, lg: 1 },
              }}
            >
              <img
                style={{ marginBottom: 50 }}
                className="img-responsive"
                src="../Public/fotosTaller/paz.jpg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                ml: { xs: 2.5, sm: 1, md: 1, lg: 1 },
              }}
            >
              <img
                style={{ marginBottom: 50 }}
                className="img-responsive"
                src="../Public/fotosTaller/ale.jpg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                ml: { xs: 2.5, sm: 1, md: 1, lg: 1 },
              }}
            >
              <img
                className="img-responsive"
                src="../Public/fotosTaller/compuLaMercedsIA.jpg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                ml: { xs: 2.5, sm: 1, md: 1, lg: 1 },
              }}
            >
              <img
                className="img-responsive"
                src="../Public/fotosTaller/mela.jpg"
                alt=""
              />
            </Box>
          </Slider>
          <Box sx={{display:'flex',justifyContent:'center'}} >
            <Videos/>
          </Box>
        </Paper>
      </>
    );
  }
}
