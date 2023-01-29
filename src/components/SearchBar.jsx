import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(search){
      navigate(`/busqueda/${search}`);
      setSearch("")
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        paddingLeft: 2,
        boxShadow: "none",
        marginRight: { small: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
      >
        <Search
          style={{
            padding: "2px",
            color: "red",
          }}
        />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
