import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import "../css/DashContent.css";

const CertificateBtn = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-flex-start my-2">
      <Button
        variant="contained"
        className="courseBtn text-light my-2 "
        style={{
          outline: "none",
        }}
      >
        Generate Certifcate
      </Button>

      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          className="courseBtn text-light my-1"
          style={{
            outline: "none",
          }}
        >
          Demo Certifcate
        </Button>
      </NavLink>
    </div>
  );
};

export default CertificateBtn;
