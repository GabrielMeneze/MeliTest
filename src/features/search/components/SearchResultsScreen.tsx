import { useSearchParams } from "next/navigation";
import { Box, Typography } from "@mui/material";

export default function SearchResultsScreen() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h5">
        Resultados para: <strong>{query}</strong>
      </Typography>

      {/* 🔹 Aqui será renderizada a lista de produtos futuramente */}
    </Box>
  );
}
