import AddAlertIcon from "@material-ui/icons/AddAlert";
import MessageIcon from "@material-ui/icons/Message";
import PublicIcon from "@material-ui/icons/Public";

import "./css/dashpro.css";

const NotifiCompo = () => {
  return (
    <div className="notify__icons">
      <AddAlertIcon />
      <MessageIcon />
      <a
        className="text-light"
        data-toggle="tooltip"
        data-placement="left"
        title="Website"
        href="https://batechnos.com"
        target="blank"
      >
        <PublicIcon />
      </a>
    </div>
  );
};

export default NotifiCompo;
