import { Paper, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

export const Videos = () => {
  const theme = createTheme();

  theme.typography.h3 = {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4.5rem",
    },
    fontFamily: ["Poppins"],
  };
  
  theme.typography.h4 = {
    fontSize: "1.1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    fontFamily: ["Poppins"],
  };
  
  theme.typography.h6 = {
    fontSize: '0.9rem',
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.4rem",
    },
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

  const handleVideo = (videoId, setText, intervalTime) => {
    let intervalId;
    const videoElement = document.getElementById(videoId);
  
    const updateText = () => {
      setText((i) => i + 1);
    };
  
    const startInterval = () => {
      intervalId = setInterval(updateText, intervalTime);

    };
  
    const stopInterval = () => {
      clearInterval(intervalId);

    };
  
    videoElement.addEventListener("play", startInterval);
    videoElement.addEventListener("pause", stopInterval);

    const hiddeVideoWords = document.getElementsByClassName('textBeforePlay')
  
    // Devuelve una función de limpieza que se ejecutará cuando el componente se desmonte
    return () => {
      videoElement.removeEventListener("play", startInterval);
      videoElement.removeEventListener("pause", stopInterval);
      clearInterval(intervalId); // Limpia el intervalo para asegurarte de que no siga ejecutándose
    };
  };
  useEffect(() => {
    const cleanup1 = handleVideo("firstVideo", setFirstFrase, 60);
    const cleanup2 = handleVideo("secondVideo", setSecondFrase, 65);

    return () => {
      cleanup1();
      cleanup2();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={24}
        sx={{
          width: "80%",
          height: { xs: 1000,sm:1100,md:"100%" },
          mt: 5,
          p: { xs: "2%", md: "5%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(circle, rgb(7, 6, 6), rgb(7, 6, 6))",
          border:'2px solid',
          borderColor:"#00d2ff",
        }}
      >
        <Typography variant="h3" color={"white"}>
          ¿Qué hacemos?
        </Typography>
        <Typography variant="h4" mb={"5%"} color={"white"}>
          Te contamos...
        </Typography>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          direction={{ xs: "column", md: "column", lg: "row" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
            display={"flex"}
            flexDirection={"column"}
          >
            <video id="firstVideo" className="videos" controls>
              <source src="../fotosTaller/explicacionOctavio.mp4" />
            </video>
            <Paper
              square
              elevation={24}
              sx={{
                overflowY: 'scroll', // Cambia 'overflow' a 'overflowY' para hacer el scroll solo vertical
                height: { xs: 150, md: 200 },
                width: "95%",
                display: "flex",
                flexDirection: "column",
                background: "radial-gradient(circle,#00d2ff,#0072ff)",
                alignItems: "center",
                justifyContent: "start",
                '&::-webkit-scrollbar': { // Agrega estas líneas para hacer el scroll transparente
                  display: 'none'
                }
              }}
            >
              <Typography mt={2} mb={2} variant="h4">
                Octavio 
              </Typography>
              <Typography variant="h6" width={{ xs: '90%', md: 400,lg:500 }}>
                {octi.slice(0, firstFrase, 50)}
              </Typography>

            </Paper>
          </Box>
          <Box
            sx={{
              
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
            display={"flex"}
            flexDirection={"column"}
          >
            <video id="secondVideo" className="videos" controls>
              <source src="../fotosTaller/explicacionLucas.mp4" />
            </video>
            <Paper
              square
              elevation={24}
              sx={{
                overflowY: 'scroll', // Cambia 'overflow' a 'overflowY' para hacer el scroll solo vertical
                height: { xs: 150, md: 200 },
                width: "95%",
                display: "flex",
                flexDirection: "column",
                background: "radial-gradient(circle,#00d2ff,#0072ff)",
                alignItems: "center",
                justifyContent: "start",
                '&::-webkit-scrollbar': { // Agrega estas líneas para hacer el scroll transparente
                  display: 'none'
                }
              }}
            >
              <Typography mt={2} mb={2} variant="h4">
                Lucas
              </Typography>
              <Typography variant="h6" width={{ xs: '90%', md: 400,lg:500 }}>
                {lucas.slice(0, secondFrase, 50)}
              </Typography>
            </Paper>
          </Box>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};
