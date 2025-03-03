"use client"; 
import { Provider } from "react-redux";
import { store } from "../store/store";
import SearchBar from "@/features/search/components/SearchBar";
import { Box, Container, CssBaseline, Typography } from "@mui/material";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="pt-BR">
        <body>
          <CssBaseline />
          <header>
            <Box
              sx={{
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "#ffe600",
                zIndex: 1000,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <SearchBar />
            </Box>
          </header>

          <main>
            <Container
              maxWidth="lg"
              sx={{
                marginTop: "80px",
                padding: "20px",
                minHeight: "calc(100vh - 120px)",
              }}
            >
              {children}
            </Container>
          </main>

          <footer>
            <Box
              sx={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#f5f5f5",
                position: "relative",
                bottom: 0,
                width: "100%",
                boxShadow: "0px -2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Mercado Livre Clone. Todos os direitos reservados.
              </Typography>
            </Box>
          </footer>
        </body>
      </html>
    </Provider>
  );
}
