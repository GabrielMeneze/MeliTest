import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../slices/searchSlice";
import { RootState, AppDispatch } from "../../../store/store";
import { Box, Typography, CircularProgress, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SearchResultsScreen() {
    const router = useRouter();
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
        </Box>
    );
}
