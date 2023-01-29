import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videosRelacionados, setVideosRelacionados] = useState(null);
  useEffect(() => {
    fetchFromAPI(`/videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`/search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideosRelacionados(data.items)
    );
  }, [id]);
  if (!videoDetail) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  document.title = `${title} | ${channelTitle}`;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/canal/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#FFF"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} visualizaciones
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} me gusta
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videosRelacionados} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
