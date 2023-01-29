import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()
  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`/search?part=snippet&q=${searchTerm}}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);
  return (

    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={2}
      sx={{
        color: "white",
      }}
    >
      Resultados de la busqueda de <span style={{ color: "#f31503" }}>{searchTerm}</span>
    </Typography>
    <Videos videos={videos} />
  </Box>
  );
};

export default SearchFeed;
