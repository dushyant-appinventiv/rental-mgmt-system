import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";
import Cards from "../components/cards";

const containerStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  overflowY: "scroll",
  height: "80vh",
  paddingBottom: "70px",
};

function Categories() {
  const location = useLocation();
  const { branchName, categories, locName } = location?.state;

  useEffect(() => {
    document.title = `${locName} > ${branchName}`;
  }, [branchName, locName]);

  return (
    <>
      <Container style={{ ...containerStyle }}>
        {categories?.map((item, i) => (
          <Cards
            key={i}
            image={item.image}
            name={item.name}
            type={"category"}
            bName={branchName}
            locName={locName}
            subCategory={item?.subcategories}
          />
        ))}
      </Container>
    </>
  );
}

export default withRouter(Categories);
