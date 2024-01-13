import React, { useEffect, useRef, useState } from "react";
import "../styles/styles.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Grow, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import "../styles/styles.css";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

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
      <Grid item sx={{ p: { xs: 2.5 } }}>
      <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          sx={{ mt: { xs: 1, md: 12 } }}
      >
          <MenuBookIcon
            sx={{
              fontSize: iconSize,
              mt: 2,
              mb: { xs: 3, md: 0 },
              color: "white"
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
              Las Bases
            </Typography>
          </Grow>
        </Stack>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h2"
              sx={{
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                color: "transparent",
                background:'radial-gradient(circle,#00BCD4,#0047FF)',
                backgroundClip: "text",
              }}
              component={"h3"}
            >
              Variables
            </Typography>
            <Typography color={"#C4C4C4"} variant="h6">
             Para almacenar Informacion
            </Typography>
            <Typography
              variant="h2"
              sx={{
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                color: "transparent",
                background:'radial-gradient(circle,#00BCD4,#0047FF)',
                backgroundClip: "text",
                marginTop: 3,
              }}
              component={"h3"}
            >
              Ciclos
            </Typography>
            <Typography color={"#C4C4C4"} variant="h6">
              de repeticion
            </Typography>
            <Typography
              variant="h2"
              sx={{
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                color: "transparent",
                background: 'radial-gradient(circle,#00BCD4,#0047FF)',
                backgroundClip: "text",
                marginTop: 3,
              }}
              component={"h3"}
            >
              Objetos
            </Typography>
            <Typography color={"#C4C4C4"} variant="h6">
              como la vida real
            </Typography>
          </ThemeProvider>
        </Grid>
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          sx={{ mt: { xs: 1, md: 15 } }}
      >
          <CodeOutlinedIcon
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
              Codigo
            </Typography>
          </Grow>
        </Stack>
      </ThemeProvider>
    </Stack>
  );
}
