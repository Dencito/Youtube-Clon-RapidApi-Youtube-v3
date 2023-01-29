import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{width: {md: "355px", xs: "100%", borderRadius: "none", border: "none", outline: "none", boxShadow: "none"}}}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/canal/${snippet?.channelId}`}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle}
            <CheckCircle sx={{fontSize: 12, color: "#fc1503", marginLeft: "5px"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
