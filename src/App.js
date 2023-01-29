
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from "@mui/material"
import {NavBar , VideoDetail, SearchFeed, Feed, CanalDetail} from "./components"
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: "#000"}}>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail />}/>
        <Route path='/canal/:id' element={<CanalDetail />}/>
        <Route path='/busqueda/:searchTerm' element={<SearchFeed />}/>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
