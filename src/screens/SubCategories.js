import { Container } from "@material-ui/core";
import { useLocation } from "react-router";
import Cards from "../components/cards";

const containerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  height: "80vh",
};

function SubCategories() {
  const location = useLocation();
  const subcategories = location?.state?.subcategories;

  return (
    <>
      <Container style={{ ...containerStyle }}>
        {subcategories?.map((item, i) => (
          <Cards
            key={i}
            type={"subcategory"}
            image={item?.image}
            name={item?.name}
          />
        ))}
      </Container>
    </>
  );
}

export default SubCategories;
