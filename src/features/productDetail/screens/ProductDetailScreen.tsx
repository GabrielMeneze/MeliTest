"use client"; // ✅ Agora Next.js trata como Client Component

import { useParams } from "next/navigation";
import ProductDetail from "../components/ProductDetail";
import { Box } from "@mui/material";

export default function ProductDetailScreen() {
  const params = useParams();
  const id = params.id as string;

  return (
    <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <ProductDetail id={id} />
    </Box>
  );
}
