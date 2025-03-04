import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import logo from "/public/logos/logomercadoLivre.png";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/items?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffe600",
        padding: "10px 20px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginRight: { xs: 1, md: 2 } }}>
        <Image src={logo} alt="Mercado Livre" width={120} height={40} />
      </Box>

      <TextField
        variant="outlined"
        placeholder="Buscar produtos, marcas e muito mais..."
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" },
          },
          "& .MuiInputBase-input": {
            padding: "12px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#999", cursor: "pointer" }} onClick={handleSearch} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
