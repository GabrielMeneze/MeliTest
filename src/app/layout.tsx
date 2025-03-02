import SearchBar from "@/features/search/components/SearchBar";
import { Box } from "@mui/material";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* 🔹 Header com SearchBar */}
        <header>
          <SearchBar />
        </header>

        {/* 🔹 Conteúdo da página */}
        <main>
          {children}
        </main>

        {/* 🔹 Footer */}
        <footer>
          <Box sx={{ textAlign: "center", padding: "20px", backgroundColor: "#f5f5f5" }}>
            <p>© 2025 Mercado Livre Clone</p>
          </Box>
        </footer>
      </body>
    </html>
  );
}
