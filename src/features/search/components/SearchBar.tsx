"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField, InputAdornment, Box, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import logo from "/public/logos/logomercadoLivre.png";
import { useDebouncedValue } from "../hooks/useDebouncedSearch";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const debouncedSearch = useDebouncedValue(searchTerm, 1500); 
    const router = useRouter();

    useEffect(() => {
        try {
            setLoading(true);
            if (searchTerm.trim()) {
                router.push(`/items?search=${encodeURIComponent(searchTerm)}`);
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }, [debouncedSearch, searchTerm]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/items?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <Box sx={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                <Box sx={{ display: "flex", alignItems: "center", marginRight: { xs: 1, md: 2 }, cursor: "pointer" }} onClick={() => router.push("/") }>
                    <Image src={logo} alt="Mercado Livre" width={90} height={60} />
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
                                {loading ? (
                                    <CircularProgress size={20} sx={{ color: "#999" }} />
                                ) : (
                                    <SearchIcon sx={{ color: "#999", cursor: "pointer" }} onClick={handleSearch} />
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
}
