import Home from "./screens/Home";
import TopNav from "./components/topNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./screens/Categories";
import SubCategories from "./screens/SubCategories";
import CustomBread from "./components/breadCrumbs";
import { BottomNavigation, Container, Typography } from "@material-ui/core";

function App() {
  const date = new Date().toDateString();
  const footerStyle = {
    width: "100%",
    marginTop: "10%",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div style={{ position: "relative" }}>
      <Router>
        <TopNav />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <>
            <Container fluid={"md"}>
              <CustomBread />
              <Route path={"/categories"} component={Categories} />
              <Route path={"/subcategories"} component={SubCategories} />
            </Container>
          </>
        </Switch>
      </Router>
      <BottomNavigation style={{ ...footerStyle }}>
        <Typography
          align={"center"}
          variant={"subtitle1"}
          color={"textSecondary"}>
          {"Copyright : Dushyant Goyal Date: " + date}
        </Typography>
      </BottomNavigation>
    </div>
  );
}

export default App;
