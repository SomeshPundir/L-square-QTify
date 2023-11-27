import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";
// import BlackButton from "./cardbutton";
import "./card.css";
export default function card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, songs, title, slug } = data;
        return (
          <div className="theWrapper">
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
              <a  className="anchor" href={`/album/${slug}`}>
                <Card
                // sx={{MaxWidth: 179, height:205 }}
                >
                  <CardContent>
                    <div>
                      <CardMedia
                        className="imagecontainer"
                        sx={{ height: 200, borderRadius: "10px" }}
                        image={image}
                        title={title}
                      />
                      <CardActions>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            sx={{
                              backgroundColor: "black",
                              color: "white",
                            }}
                            label={`${follows} follows`}
                          />
                        </Stack>
                      </CardActions>
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <Typography sx={{ fontSize: "14px" }}>{title}</Typography>
                </div>
              </a>
            </Tooltip>
          </div>
        );
      }
      case "song": {
        const { image, likes, title } = data;

        return (
          <>
            <Card>
              <CardContent>
                <div>
                  <CardMedia
                    className="imagecontainer"
                    sx={{ height: 200, borderRadius: "10px" }}
                    image={image}
                    title={title}
                  />
                  <CardActions>
                    <div className="pills">
                      <p>{likes} likes</p>
                    </div>
                  </CardActions>
                </div>
              </CardContent>
            </Card>
            <div>
              <Typography sx={{ fontSize: "14px" }}>{title}</Typography>
            </div>
          </>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}
