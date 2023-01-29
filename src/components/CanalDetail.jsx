import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos, CanalCard } from "../components";

const CanalDetail = () => {
  const [canalDetail, setCanalDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`/channels?part=snippet&id=${id}`).then((data) =>
      setCanalDetail(data?.items[0])
    );

    fetchFromAPI(`/search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  document.title = `Canal de ${canalDetail?.snippet?.title}`
  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(18,133,231,1) 0%, rgba(240,22,85,1) 95%)",
          zIndex: 10,
          height: "300px",
        }}
      >
      <CanalCard canalDetail={canalDetail} />
      </div>
      <Box display="flex"p="2">
        <Box sx={{
          mr: {sm: "100px"}
        }}>
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
  );
};

export default CanalDetail;
