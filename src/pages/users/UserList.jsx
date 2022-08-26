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
        <div>userpage</div>
      </div>
    </div>
  );
};

export default UserList;
