import { Main, Header, Container, Footer } from "@/components";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

const appTitle = "Workshop Sessions";
const footerContent = "Felipe Oucharski 2023";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header title={appTitle} />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer>
          <p>{footerContent}</p>
        </Footer>
      </Main>
    </ThemeProvider>
  );
}
