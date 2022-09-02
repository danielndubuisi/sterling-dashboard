import "./userlist.scss";
import Overview from "../../components/overview/Overview";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUpload from "@mui/icons-material/DriveFolderUpload";

const UserList = () => {
  return (
    <div className="user">
      <Sidebar />
      <div className="user_container">
        <Overview />
        <div className="top">
          <h3>Add new user</h3>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="user"
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image
                  <DriveFolderUpload className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <div className="form-input">
                <label>Username</label>
                <input type="text" placeholder="@username" />
              </div>
              <div className="form-input">
                <label>Fullname</label>
                <input type="text" placeholder="Enter fullname" />
              </div>
              <div className="form-input">
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
              </div>
              <div className="form-input">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
              </div>

              <div className="form-input">
                <label>Phone</label>
                <input type="text" placeholder="Enter phone no." />
              </div>
              <div className="form-input">
                <label>Address</label>
                <input type="text" placeholder="Enter address" />
              </div>
              <div className="form-input">
                <label>Country</label>
                <input type="text" placeholder="Nigeria" />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
