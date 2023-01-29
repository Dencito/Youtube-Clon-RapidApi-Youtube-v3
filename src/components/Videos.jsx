import { Stack, Box } from "@mui/material";
import { VideoCard, CanalCard } from "../components";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return "loading..."
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" gap={4} marginTop={3}>
      {videos?.map((video, i) => (
        <Box key={i}>
          {video.id.channelId && <CanalCard canalDetail={video} />}
          {video.id.videoId && <VideoCard video={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
