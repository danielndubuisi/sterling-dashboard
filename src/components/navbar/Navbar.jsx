import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search by invoice number, name, amount..."
          />
        </div>
        <div className="items">
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
            <div className="item">
              <img
                src="https://picsum.photos/200/300?random=7"
                alt="avatar"
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
