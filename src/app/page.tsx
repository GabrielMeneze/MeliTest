"use client"

import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const products = {
  author: { name: "Gabriel", lastname: "Dev" },
  items: [
    {
      id: "MLA1456027103",
      title: "Pilha Energizer Max - Pack 8 Unidades",
      price: { currency: "ARS", amount: 4498, decimals: 0 },
      picture: "http://http2.mlstatic.com/D_766690-MLA46301154156_062021-I.jpg",
      condition: "new",
      free_shipping: true,
      discount: 6,
      original_price: 5000,
    },
    {
      id: "MLA1610631786",
      title: "Pilha SCP Recarregáveis - Pack 4 Unidades",
      price: { currency: "ARS", amount: 11621, decimals: 22 },
      picture: "http://http2.mlstatic.com/D_659587-MLA79342019892_092024-I.jpg",
      condition: "new",
      free_shipping: false,
      discount: 2,
      original_price: 11800,
    },
  ],
};

export default function Home() {
  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", py: 4 }}>
      <Container>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3, fontWeight: "bold", color: "#333" }}>
          Bem-vindo ao Mercado Livre Clone
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", mb: 4, color: "#555" }}>
          Busque seus produtos favoritos ou confira algumas ofertas abaixo!
        </Typography>
        <Grid container spacing={3}>
          {products.items.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: 2,
                  padding: 2,
                  cursor: "pointer",
                  border: "1px solid #e0e0e0",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                }}
                onClick={() => router.push(`/items/${product.id}`)}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.picture}
                  alt={product.title}
                  sx={{ objectFit: "contain", backgroundColor: "#fff", padding: 2 }}
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#333", cursor: "pointer", "&:hover": { color: "#007bff" } }}
                  >
                    {product.title}
                  </Typography>
                  {product.original_price && (
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: "line-through", color: "gray", fontSize: "0.85rem" }}
                    >
                      {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: product.price.currency,
                      }).format(product.original_price)}
                    </Typography>
                  )}
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: product.price.currency,
                    }).format(product.price.amount)}
                  </Typography>
                  {product.free_shipping && (
                    <Typography variant="body2" sx={{ color: "green", fontWeight: "bold" }}>
                      Frete grátis
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
