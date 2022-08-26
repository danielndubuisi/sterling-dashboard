import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessIcon from "@mui/icons-material/Business";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Drugstoc</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/">
            <li>
              <BusinessIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/users">
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <p className="title">PROFILE</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <Link to="/login">
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <p className="title">THEME</p>
        <div className="bottom-container">
          <div className="colorOptions"></div>
          <div className="colorOptions"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
