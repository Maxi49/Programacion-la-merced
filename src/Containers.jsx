import {
  Grid,
  Typography,
  Paper,

  createTheme,
  ThemeProvider,
  useMediaQuery,

  Grow,
} from "@mui/material";
import {
  Box,

} from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import "../styles/styles.css";
import HandymanIcon from "@mui/icons-material/Handyman";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "1.7rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "5rem",
  },
  fontFamily: ["Poppins"],
};

theme.typography.h3 = {
  fontSize: "1.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
  fontFamily: ["Poppins"],
};
theme.typography.h4 = {
  fontSize: "1.4rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  fontFamily: ["Poppins"],
};
theme.typography.h5 = {
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  fontFamily: ["Poppins"],
};

export const Containers = () => {
  const [checked, setChecked] = useState(false);
  const Icontheme = createTheme();
  const isXs = useMediaQuery(Icontheme.breakpoints.only("xs"));
  const isSm = useMediaQuery(Icontheme.breakpoints.only("sm"));
  const isMd = useMediaQuery(Icontheme.breakpoints.only("md"));
  const isLg = useMediaQuery(Icontheme.breakpoints.up("lg"));

  let iconSize;
  if (isXs) {
    iconSize = "2.3rem";
  } else if (isSm) {
    iconSize = "3.5rem";
  } else if (isMd) {
    iconSize = "4.3rem";
  } else if (isLg) {
    iconSize = "5rem";
  }

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChecked(true);
        }
      },
      { threshold: 0.5 }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <HandymanIcon
            sx={{ mr: 2, mt: { xs: 0.5, md: 3 }, fontSize: iconSize }}
            style={{ color: "white" }}
          />
          <Grow sx={{display:'inline-block'}} orientation="horizontal" timeout={1000} ref={ref} in={checked} >
            <Typography variant="h1" component={"h2"} color={"white"}>
              Nuestros proyectos
            </Typography>
          </Grow>
        </Box>
        <Grid mt={2} container spacing={3}>
          <Grid item xs={12}>
            <Paper
              elevation={12}
              sx={{
                height: {
                  xs: 180,
                  md: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  background: "radial-gradient(circle,#00BCD4,#0047FF)",
                  ":hover": {
                    borderStyle: "hidden",
                    boxShadow: "1px 1px 50px #0047FF",
                    transition: "all 0.4s ease", // Ajusta la duración y el tipo de transición a tus necesidades
                  },
                },
              }}
            >
              <Box m={{ xs: 2, sm: 3, md: 5 }} sx={{}}>
                <Typography variant="h3">Biblioteca de Proyectos</Typography>
                <Typography mt={1} variant="h5">
                  Todos los proyectos del año
                </Typography>
                <Box mt={2}>
                  <ArrowCircleRightOutlinedIcon fontSize="large" />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              elevation={12}
              sx={{
                height: {
                  xs: 120,
                  md: 150,
                  background: "linear-gradient(to bottom,#0047FF,#00BCD4);",
                  border: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "end",
                  ":hover": {
                    borderStyle: "hidden",
                    boxShadow: "1px 1px 50px #0047FF",
                    transition: "all 0.4s ease", // Ajusta la duración y el tipo de transición a tus necesidades
                  },
                },
              }}
            >
              <Box m={{ xs: 2, md: 3 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  Matematicas con IA
                </Typography>
                <ArrowCircleRightOutlinedIcon fontSize="large" />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              elevation={12}
              sx={{
                height: {
                  xs: 120,
                  md: 150,
                  background: "linear-gradient(to bottom,#0047FF,#00BCD4);",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "end",
                  ":hover": {
                    borderStyle: "hidden",
                    boxShadow: "1px 1px 50px #0047FF",
                    transition: "all 0.4s ease", // Ajusta la duración y el tipo de transición a tus necesidades
                  },
                },
              }}
            >
              <Box m={{ xs: 2, md: 3 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  Interfaz Con Tkinter
                </Typography>
                <ArrowCircleRightOutlinedIcon fontSize="large" />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Paper
              elevation={12}
              sx={{
                height: {
                  xs: 120,
                  md: 150,
                  background: "linear-gradient(to bottom,#0047FF,#00BCD4);",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "end",
                  ":hover": {
                    borderStyle: "hidden",
                    boxShadow: "2px 2px 50px #0047FF",
                    transition: "all 0.4s ease", // Ajusta la duración y el tipo de transición a tus necesidades
                  },
                },
              }}
            >
              <Box m={{ xs: 2, md: 3 }}>
                <Typography sx={{ mb: 1 }} variant="h4">
                  OOP
                </Typography>
                <ArrowCircleRightOutlinedIcon fontSize="large" />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
