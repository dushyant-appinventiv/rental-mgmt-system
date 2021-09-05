import { useHistory, withRouter } from "react-router-dom";
import { Breadcrumbs, Button } from "@material-ui/core";
import { useEffect, useState } from "react";

function CustomBread(props) {
  const history = useHistory();
  const [categories, setCategories] = useState();

  useEffect(() => {
    if (props?.location?.state?.categories) {
      setCategories(props?.location?.state?.categories);
    }
  }, [props?.location?.state?.categories]);

  return (
    <>
      <Breadcrumbs
        style={{ padding: "8px 30px" }}
        aria-label={"breadcrumb"}
        separator={">"}>
        <Button
          type={"link"}
          onClick={() =>
            history.replace({
              pathname: "/categories",
              state: {
                categories: categories,
                branchName: props?.location?.state?.bName,
                locName: props?.location?.state?.locName,
              },
            })
          }>
          {"Categories"}
        </Button>
        {props?.location?.pathname === "/subcategories" ? (
          <Button type={"link"}>{"Sub-Categories"}</Button>
        ) : null}
      </Breadcrumbs>
    </>
  );
}

export default withRouter(CustomBread);
