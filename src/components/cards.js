import {
  Card,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import { ChevronRightSharp } from "@material-ui/icons";
import { useHistory } from "react-router";
import { categoryImages, subCategoryImages } from "../utils/importImages";
import { memo } from "react";

function Cards(props) {
  const history = useHistory();

  const handleClick = () => {
    if (props?.type === "category") {
      history.replace({
        pathname: "/subcategories",
        state: {
          subcategories: props?.subCategory,
          bName: props?.bName,
          locName: props?.locName,
        },
      });
    }
  };

  const cardStyle = {
    maxWidth: "280px",
    margin: "8px 0px",
    maxHeight: "300px",
  };

  let img;
  if (props?.type === "category") {
    img = categoryImages.find((image) => image.name === props?.image);
  } else {
    img = subCategoryImages.find((image) => image.name === props?.image);
  }

  return (
    <Card style={{ ...cardStyle }} raised>
      <CardMedia
        component={"img"}
        alt={"Machines"}
        height={"250px"}
        src={img.imgSrc}
      />
      <CardActionArea>
        <CardActions>
          <Button
            endIcon={props?.type === "category" ? <ChevronRightSharp /> : null}
            fullWidth
            onClick={() => handleClick()}
            variant={"contained"}
            color={"primary"}>
            {props.name}
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default memo(Cards);
