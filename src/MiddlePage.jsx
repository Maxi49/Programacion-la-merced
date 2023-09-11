import React, { useEffect, useRef, useState } from "react";
import "../styles/styles.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Grow, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import "../styles/styles.css";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4rem",
  },
  fontFamily: ["Poppins"],
};

theme.typography.h2 = {
  fontSize: "3rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.4rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "6rem",
  },
  fontFamily: ["Poppins"],
};

export function MiddlePage() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber < 42.5) {
          return prevNumber + 2.9;
        } else {
          clearInterval(timer);
          return prevNumber;
        }
      });
    }, 100); 

    return () => clearInterval(timer);
  }, []);

  const [checked, setChecked] = useState(false);

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

  const Icontheme = createTheme();
  const isXs = useMediaQuery(Icontheme.breakpoints.only("xs"));
  const isSm = useMediaQuery(Icontheme.breakpoints.only("sm"));
  const isMd = useMediaQuery(Icontheme.breakpoints.only("md"));
  const isLg = useMediaQuery(Icontheme.breakpoints.up("lg"));

  let iconSize;
  if (isXs) {
    iconSize = "2.7rem";
  } else if (isSm) {
    iconSize = "4rem";
  } else if (isMd) {
    iconSize = "4.5rem";
  } else if (isLg) {
    iconSize = "5.5rem";
  }

  return (
    <Stack
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        mt: { xs: 1, md: 12 },
        gap: { xs: 3, sm: 5, md: 10, lg: 10 },
      }}
      direction={{ xs: "column", sm: "column", md: "row" }}
    >
      <ThemeProvider theme={theme}>
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          sx={{ mt: { xs: 1, md: 12 } }}
        >
          <GroupAddIcon
            sx={{
              fontSize: iconSize,
              mt: 2,
              mb: { xs: 3, md: 0 },
              pl: { xs: 2.5, md: 0, lg: 0, color: "white" },
            }}
            style={{}}
          />
          <Grow orientation="horizontal" timeout={1000} ref={ref} in={checked} >
            <Typography
              sx={{
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: { xs: 3, md: 0 },
                pl: { xs: 2.5, md: 0, lg: 0 },

              }}
              variant="h1"
              color={"white"}
              component={"h2"}
            >
              Unite al Taller
            </Typography>
          </Grow>
        </Stack>
        <Grid item sx={{ p: { xs: 2.5 } }}>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h2"
              sx={{
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                color: "transparent",
                backgroundColor: lightBlue[400],
                backgroundClip: "text",
              }}
              component={"h3"}
            >
              {number.toFixed(1)}hs+
            </Typography>
            <Typography color={"#C4C4C4"} variant="h6">
              Duracion del curso
            </Typography>
            <Typography
              variant="h2"
              sx={{
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                color: "transparent",
                backgroundColor: lightBlue[400],
                backgroundClip: "text",
                marginTop: 3,
              }}
              component={"h3"}
            >
              Ilimitada
            </Typography>
            <Typography color={"#C4C4C4"} variant="h6">
              Capacidad de estudiantes
            </Typography>
            <Typography
              variant="h2"
              sx={{
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                color: "transparent",
                backgroundColor: lightBlue[400],
                backgroundClip: "text",
                marginTop: 3,
              }}
              component={"h3"}
            >
              $5000
            </Typography>
            <Typography color={"#C4C4C4"} variant="h6">
              Pago Mensual (puede subir trimestralmente)
            </Typography>
          </ThemeProvider>
        </Grid>
      </ThemeProvider>
    </Stack>
  );
}
