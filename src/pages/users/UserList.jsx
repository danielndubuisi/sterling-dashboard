import "./userlist.scss";
import Overview from "../../components/overview/Overview";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const UserList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list_container">
        <Overview />
        <Navbar />
        <div className="user">
          <h3>Welcome to the userpage</h3>
        </div>
      </div>
    </div>
  );
};

export default UserList;
