"use client";

import { useParams } from "next/navigation";
import ProductDetailScreen from "@/features/productDetail/screens/ProductDetailScreen";
import { Box } from "@mui/material";

export default function ProductDetailPage() {
  const { id } = useParams(); // Captura o ID da URL

  if (!id || typeof id !== "string") {
    return <Box sx={{ textAlign: "center", padding: "20px" }}>Produto não encontrado.</Box>;
  }

  return (
    <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <ProductDetailScreen id={id} />
    </Box>
  );
}
