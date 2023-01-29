import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const CanalCard = ({ canalDetail }) => {
  const id = canalDetail?.id?.channelId || canalDetail?.id;
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {xs: "356px", md: "320px"},
        height: "326px",
        margin: "auto"
      }}
    >
      <Link to={`/canal/${id}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={canalDetail?.snippet?.thumbnails?.medium?.url}
            alt={canalDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              boxShadow: "0px 5px 15px #fc1503",
            }}
          />
          <Typography variant="h6" fontWeight="bold">
            {canalDetail?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: 14, color: "#fc1503", marginLeft: "5px" }}
            />
          </Typography>
          {canalDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                canalDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscriptores
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default CanalCard;
