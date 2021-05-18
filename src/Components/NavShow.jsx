import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import "./css/DashContent.css";

export default function NavShow() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" className="navShowFont">
        Dashboard
      </Link>
      <Typography href="/course" color="textPrimary" className="navShowFont">
        Course
      </Typography>
    </Breadcrumbs>
  );
}
