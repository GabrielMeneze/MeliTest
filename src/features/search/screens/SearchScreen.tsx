"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../slices/searchSlice";
import { RootState, AppDispatch } from "../../../store/store";
import { Box, Typography, CircularProgress, Grid, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";

export default function SearchScreen() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h5">
        Resultados para: <strong>{query}</strong>
      </Typography>

      {status === "loading" && <CircularProgress />}
      {status === "failed" && <Typography color="error">{error}</Typography>}

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
