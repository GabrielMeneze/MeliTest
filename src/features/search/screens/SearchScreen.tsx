import SearchBar from "../components/SearchBar";
import SearchResultsScreen from "../components/SearchResultsScreen";
import { Box } from "@mui/material";

export default function SearchScreen() {
  return (
    <Box>
      <SearchBar />
      <SearchResultsScreen />
    </Box>
  );
}
