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
            <Stack sx={{display:'flex',justifyContent:'center',alignItems:'center'}} direction={{xs:'column',md:'row'}} spacing={{xs:0,md:3}} mb={2} >
              <Typography color={"white"} variant="h2">
                ¿Te interesa?
              </Typography>
              <Typography color={"white"} mb={5} variant="h2">
                ¡Anotate!
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={4}>
              <Button variant="outlined" size={"medium"}>
                Comenzar
              </Button>
              <Button variant="text" size={"medium"}>
                Ver Proyectos
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
