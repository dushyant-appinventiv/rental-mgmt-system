import {
  Card,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import { ChevronRightSharp } from "@material-ui/icons";
import { useHistory } from "react-router";
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

  let imgPath;
  if (props?.type === "category") {
    imgPath = `images/category/${props?.image}`;
  } else {
    imgPath = `images/category/subcategory/${props?.image}`;
  }

  return (
    <Card style={{ maxWidth: "280px", margin: "8px 0px" }} raised>
      <CardMedia
        component={"img"}
        alt={"Machines"}
        height={"250px"}
        src={imgPath}
      />
      <CardActionArea>
        <CardActions>
          <Button
            endIcon={<ChevronRightSharp />}
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
