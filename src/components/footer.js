import { BottomNavigation, Typography } from "@material-ui/core";

const footerStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  left: "0",
  bottom: "0",
};

function Footer() {
  const date = new Date().toDateString();
  return (
    <BottomNavigation style={{ ...footerStyle }}>
      <Typography
        align={"center"}
        variant={"subtitle1"}
        color={"textSecondary"}>
        {"Copyright : Dushyant Goyal Date: " + date}
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
