import {
  Button,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

export const Footer = () => {
  const theme = createTheme();

  theme.typography.h2 = {
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
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

  return (
    <>
      <Grid
        container
        mt={10}
        mb={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack sx={{display:'flex',justifyContent:'center',alignItems:'center'}} direction={{xs:'column',md:'column'}} spacing={{xs:0,md:1}} mb={2} >
              <Typography color={"white"} variant="h2">
                ¿Queres ver mas?
              </Typography>
              <Typography color={"white"} mb={5} variant="h2">
                ¡Mira nuestros Proyectos!
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={4}>
              <Button variant="outlined" size={"large"}>
                Proyectos
              </Button>
            </Stack>
          </Grid>
        </ThemeProvider>
      </Grid>
      <Box component="footer" sx={{ backgroundColor: "#f8f8f8", p: 2 }}>
        <Container maxWidth="lg">
          <Typography variant="body1">Taller De Programacion</Typography>
          <Typography variant="body2" color="text.secondary">
            {"© "}
            {new Date().getFullYear()}
            {" La Merced "}
          </Typography>
        </Container>
      </Box>
    </>
  );
};
