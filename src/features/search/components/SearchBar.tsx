import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

// 🔹 Importação do logo do Mercado Livre (coloque a imagem em /public)
import logo from "/public/logos/logomercadoLivre.png";

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffe600", // Amarelo do Mercado Livre
        padding: "10px 20px",
        width: "100%",
      }}
    >
      {/* 🔹 Logo do Mercado Livre */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginRight: { xs: 1, md: 2 }, // Menor margem no mobile
        }}
      >
        <Image src={logo} alt="Mercado Livre" width={120} height={40} />
      </Box>

      {/* 🔹 Campo de busca */}
      <TextField
        variant="outlined"
        placeholder="Buscar produtos, marcas e muito mais..."
        fullWidth
        sx={{
          maxWidth: "800px", // 🔹 Define um limite para telas grandes
          backgroundColor: "#fff",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" },
          },
          "& .MuiInputBase-input": {
            padding: "12px", // Ajuste para melhor UX
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#999" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
