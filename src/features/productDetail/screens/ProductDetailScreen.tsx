"use client";

import ProductDetail from "../components/ProductDetail";
import { useProductDetails } from "../hooks/useProductDetails";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function ProductDetailScreen({ id }: { id: string }) {
  const { product, status, error } = useProductDetails(id);

  if (status === "loading") return <CircularProgress />;
  if (status === "failed") return <Typography color="error">{error}</Typography>;
  if (!product) return <Typography>Nenhum produto encontrado.</Typography>;

  return (
    <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <ProductDetail product={product} /> 
    </Box>
  );
}
