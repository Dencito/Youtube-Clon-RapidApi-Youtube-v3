import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((categoria) => (
        <button className="category-btn" style={{
            background: categoria.name === selectedCategory && "#fc1503",
            color: "white"
        }}
        key={categoria.name}
        onClick={()=> setSelectedCategory(categoria.name)}
        >
          <span style={{color: categoria.name === selectedCategory ? "white" : "red", marginRight: "15px"}}>{categoria.icon}</span>
          <span style={{opacity: categoria.name === selectedCategory ? "1" : "0.8"}}>{categoria.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
