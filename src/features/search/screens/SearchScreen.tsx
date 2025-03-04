"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Box, Typography, CircularProgress, Grid, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";

export default function SearchScreen() {
  const { products, categories, status, error } = useSelector((state: RootState) => state.search);

  if (status === "loading") return <CircularProgress />;
  if (status === "failed") return <Typography color="error">{error}</Typography>;
  if (products.length === 0) return <Typography>Nenhum produto encontrado.</Typography>;

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h5">Resultados da busca</Typography>

      {categories.length > 0 && (
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
          Categorias: {categories.join(" > ")}
        </Typography>
      )}

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Link href={`/items/${product.id}`} passHref>
              <Card sx={{ height: "100%", cursor: "pointer" }}>
                <CardMedia component="img" height="140" image={product.picture} alt={product.title} />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Preço: {product.price.currency} {product.price.amount},{product.price.decimals}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
