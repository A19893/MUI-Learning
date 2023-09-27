import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Post = () => {
  const [isLike, setLike] = useState(false);

  return (
    <Box >
      <Card sx={{margin:"10px"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              sx={isLike ? { color: "red" } : { color: "" }}
              onClick={() => setLike(!isLike)}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{margin:"10px"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              Y
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Yash Arora"
          subheader="October 14, 2020"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://media.istockphoto.com/id/1310123811/photo/rajma-chawal-an-indian-food.jpg?s=612x612&w=0&k=20&c=MqonB4k6aHHzCgvJEngr2S7zVSo4_h9oyLVh9PXrRWs="
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          The dish developed after the red kidney bean was brought to the Indian subcontinent from Mexico. Rajma Chawal is kidney beans served with boiled rice.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              sx={isLike ? { color: "red" } : { color: "" }}
              onClick={() => setLike(!isLike)}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
