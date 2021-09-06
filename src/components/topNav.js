import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";
import data from "../utils/data/catalog.json";
import { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navHeadStyle: {
    flexGrow: 1,
    textDecoration: "none",
  },
}));

function TopNav() {
  const [menu, setMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const classes = useStyles();
  const history = useHistory();

  const handleBtnClick = (event) => {
    setMenu(true);
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleSubClick = (branch, locName) => {
    setMenu(false);
    history.replace({
      pathname: "/categories",
      state: {
        categories: branch.categories,
        branchName: branch?.name,
        locName,
      },
    });
  };

  const getMenuItems = (location, i) => {
    return (
      <MenuItem key={i}>
        {location?.name}
        <NestedMenuItem parentMenuOpen={menu}>
          {location?.branches?.map((branch, i) => (
            <MenuItem
              onClick={() => handleSubClick(branch, location?.name)}
              key={i}>
              {branch?.name}
            </MenuItem>
          ))}
        </NestedMenuItem>
      </MenuItem>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position={"sticky"}>
        <Toolbar>
          <Link className={classes.navHeadStyle} to={"/"}>
            <Typography variant={"h6"} color={"textPrimary"}>
              {"RENTAL MANAGEMENT SYSTEM"}
            </Typography>
          </Link>
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={(e) => handleBtnClick(e)}>
            {"Select Location"}
          </Button>
          <Menu
            open={menu}
            anchorReference={"anchorPosition"}
            anchorPosition={menuPosition}
            onClose={() => setMenu(false)}>
            {data?.data?.locations?.map((loc, i) => getMenuItems(loc, i))}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(TopNav);
