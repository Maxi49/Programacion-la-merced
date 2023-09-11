import {
  Grid,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import "../styles/styles.css";
const theme = createTheme();

theme.typography.h3 = {
  fontSize: "2.7rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3.7rem",
  },

  fontFamily: ["Poppins"],
};
theme.typography.h1 = {
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "4.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "5rem",
  },
  fontFamily: ["Poppins"],
};
theme.typography.h4 = {
  fontSize: "1.3rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
  },
  fontFamily: ["Poppins"],
};

export const Title = () => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            mt: 6,
            alignItems: "center",
          }}
        >
          <Container maxWidth="md">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box marginBottom={3}>
                <Typography
                  variant={"h1"}
                  component={"h1"}
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  Taller de programacion
                </Typography>

                <Typography
                  variant="h5"
                  component={"p"}
                  sx={{
                    color: "grey",
                    mt: 3,
                    width: { md: "70%" },
                  }}
                >
                  Un taller dado por la institucion La Merced donde se explican
                  varios conceptos de software y logica
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
                <Button
                  variant="contained"
                  size={"medium"}
                  sx={{
                    mr: 3,
                  }}
                >
                  Anotarse
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      textAlign: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        marginLeft: 1,
                        alignItems: "center",
                        textAlign: "center",
                        alignSelf: "center",
                      }}
                      variant="subtitle2"
                      component={"h3"}
                    >
                      Proyectos
                    </Typography>
                    <CodeOutlinedIcon
                      sx={{
                        marginLeft: 1,
                        alignItems: "center",
                        textAlign: "center",
                        alignSelf: "center",
                        mb: 0.2,
                      }}
                    />
                  </Box>
                </Button>
              </Box>
            </Box>
          </Container>

          <Box
            sx={{
              marginLeft: 0,
              display: { md: "flex", xs: "none", sm: "none" },
            }}
          >
            <img
              width={400}
              style={{
                background: "rgb(47, 0, 255,0.350)",
                borderRadius: 1000,
                border: "none",
                borderStyle: "hidden",
                backdropFilter: "blur(400px)",
                boxShadow: "1px 1px 800px rgb(47, 0, 255,10)",
              }}
              src="../Public/Python.png"
              alt=""
            />
          </Box>
        </Box>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            textAlign: "center",
            mt: 10,
            justifyContent: "center",
          }}
          color={"grey"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </ThemeProvider>
    </Grid>
  );
};
