import { Typography,ThemeProvider, createTheme, Grid, useMediaQuery, Grow } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import GroupsIcon from '@mui/icons-material/Groups';

const theme = createTheme()

theme.typography.h3 = {
    fontSize: "1.8rem",
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

export const AutoPlayText = () => {
  const ref = useRef(null);
  const [checked, setChecked] = useState(false);
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
    iconSize = "2.3rem";
  } else if (isSm) {
    iconSize = "3.5rem";
  } else if (isMd) {
    iconSize = "4.3rem";
  } else if (isLg) {
    iconSize = "6rem";
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
      <GroupsIcon sx={{fontSize:iconSize}} style={{color:'white'}}/>
      <Grow orientation="horizontal" timeout={1000} ref={ref} in={checked} >

        <Typography
          color={"white"}
          variant="h3"
          
        >
          Compañerismo
        </Typography>
      </Grow>
      </Box>
      <Typography
        color={"white"}
        variant="h4"
        mb={2}
      >
        
      </Typography>
      </Grid>
    </ThemeProvider>
  );
};
