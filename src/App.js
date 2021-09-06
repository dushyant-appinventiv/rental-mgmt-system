import Home from "./screens/Home";
import TopNav from "./components/topNav";
import Footer from "./components/footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import Categories from "./screens/Categories";
import SubCategories from "./screens/SubCategories";
import CustomBread from "./components/breadCrumbs";
import { Container } from "@material-ui/core";

const mainContainerStyle = {
  position: "relative",
  height: "90vh",
  overflowX: "hidden",
  display: "flex",
  alignItems: "center",
};

function App() {
  return (
    <>
      <HashRouter>
        <TopNav />
        <Container style={{ ...mainContainerStyle }}>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Container fluid={"md"}>
              <CustomBread />
              <Route path={"/categories"} component={Categories} />
              <Route path={"/subcategories"} component={SubCategories} />
            </Container>
          </Switch>
          <Footer />
        </Container>
      </HashRouter>
    </>
  );
}

export default App;
