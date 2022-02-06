import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import AppBar from "../components/AppBar";
import { Box, Container, Paper } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <AppBar />
        <Container maxWidth="md">
          <Box pt={1}>
            <Paper variant="outlined">
              <Box m={1}>
                <Component {...pageProps} />
              </Box>
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
