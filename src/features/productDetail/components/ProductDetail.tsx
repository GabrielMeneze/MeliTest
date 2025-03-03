"use client";

import { Box, Typography, CircularProgress, Button, Divider } from "@mui/material";
import { useProductDetails } from "../hooks/useProductDetails";
import Image from "next/image";

export default function ProductDetail({ id }: { id: string }) {
  const { product, status, error } = useProductDetails(id);

  if (status === "loading") return <CircularProgress />;
  if (status === "failed") return <Typography color="error">{error}</Typography>;
  if (!product) return <Typography>Nenhum produto encontrado.</Typography>;

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Image src={product.picture} alt={product.title} width={400} height={400} style={{ borderRadius: 8 }} />
      </Box>

      <Box sx={{ flex: 2 }}>
        <Typography variant="body2" color="textSecondary">
          {product.condition === "new" ? "Novo" : "Usado"} • {product.sold_quantity} vendidos
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          {product.title}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          {product.price.currency} {product.price.amount},{product.price.decimals}
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ padding: "10px", marginBottom: 2 }}>
          Comprar agora
        </Button>

        <Divider sx={{ margin: "20px 0" }} />

        <Typography variant="h6">Descrição do Produto</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
}
