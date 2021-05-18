import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./css/Login.css";

const Login = () => {
 
  return (
    <div className="login">
      <Paper className="loginDetails">
        <Typography variant="h4" className="my-2 loginText">
          Dashboard
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
