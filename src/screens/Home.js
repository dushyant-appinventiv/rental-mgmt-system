import { Typography, Container } from "@material-ui/core";
import { useEffect } from "react";

function Home() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "60vh",
  };

  useEffect(() => {
    document.title = "Rental Mgmt System";
  }, []);

  return (
    <>
      <Container style={{ ...containerStyle }} maxWidth={"md"}>
        <Typography
          gutterBottom
          align={"center"}
          variant={"h4"}
          color={"textPrimary"}>
          {"Welcome to Rental Management System"}
        </Typography>
        <Typography
          align={"center"}
          variant={"subtitle1"}
          color={"textSecondary"}>
          {"Please Select Location"}
        </Typography>
      </Container>
    </>
  );
}

export default Home;
