import { Paper, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Box, Stack, border, height } from "@mui/system";
import React, { useEffect, useState } from "react";
import AutoPlay from "./AutoPlay";

export const Videos = () => {
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "5.5rem",
    },
    fontFamily: ["Poppins"],
  };

  theme.typography.h4 = {
    fontSize: "1.2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    fontFamily: ["Poppins"],
  };
  theme.typography.h6 = {
    fontSize: "1.4rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "6rem",
    },
    fontFamily: ["Poppins"],
  };
  theme.typography.h6 = {
    fontSize: "1.4rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "6rem",
    },
    fontFamily: ["Poppins"],
  };
  theme.typography.h6 = {
    fontSize: "80%",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
    fontFamily: ["Poppins"],
  };

  const octi =
    "En las ultimas clases vimos como funciona la inteligencia artificial y implementamos una en Python para que nos de un resultado matematico.";

  const lucas =
    "En el curso de programacion de Python empezamos viendo las bases y ya estamos implementando funciones. Despues de las vacaciones vamos a aprender a graficar.";

  const [firstFrase, setFirstFrase] = useState(0);
  const [secondFrase, setSecondFrase] = useState(0);

  const handleFirstVideo = () => {
    const intervalId = setInterval(() => {
      setFirstFrase((i) => i + 1);
    }, 60);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    const videoElement = document.getElementById("firstVideo");
    videoElement.addEventListener("play", handleFirstVideo);
    return () => videoElement.removeEventListener("play", handleFirstVideo);
  }, []);

  const handleSecondVideo = () => {
    const intervalId = setInterval(() => {
      setSecondFrase((i) => i + 1);
    }, 65);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    const videoElement = document.getElementById("secondVideo");
    videoElement.addEventListener("play", handleSecondVideo);
    return () => videoElement.removeEventListener("play", handleSecondVideo);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={24}
        sx={{
          width: "80%",
          height: {xs:1000,md:'100%'},
          mt: 5,
          p:{xs:'2%',md:'5%'},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(circle,#414345,#232526)",
        }}
      >
        <Typography variant="h3" color={'white'} >
          ¿Que se hace en el taller?
        </Typography>
        <Typography variant="h4" mb={'5%'} color={'white'} >
          Los chicos nos cuentan
        </Typography>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          direction={{ xs: "column", md: "column",lg:'row' }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            display={"flex"}
            flexDirection={"column"}
          >
            <video id="firstVideo" className="videos" controls>
              <source src="../Public/fotosTaller/SOSUNABESTIANEGROOOO.mp4" />
            </video>
            <Paper square
              elevation={24}
              sx={{
                height: {xs:200,md:310},
                width: '95%', 
                display: "flex",
                flexDirection: "column",
                background:'radial-gradient(circle,#FFFF,#eef2f3)',
                alignItems:'center'
              }}
            >
              <Typography margin={3} variant="h4">
                Octavio Cortez
              </Typography>
              <Typography variant="h6" width={{xs:250,md:500}} >
                {octi.slice(0, firstFrase)}
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            display={"flex"}
            flexDirection={"column"}
          >
            <video id="secondVideo" className="videos" controls>
              <source src="../Public/fotosTaller/tipaso.mp4" />
            </video>
            <Paper square
              elevation={24}
              sx={{
                height: {xs:230,md:310},
                width: '95%',
                display: "flex",
                flexDirection: "column",
                background:'radial-gradient(circle,#FFFF,#eef2f3)',
                alignItems:'center'
              }}
            >
              <Typography margin={3} variant="h4" >
                Lucas Sarmiento
              </Typography>
              <Typography variant="h6" width={{xs:250,md:500}} >
                {lucas.slice(0, secondFrase)}
              </Typography>
            </Paper>
          </Box>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};
