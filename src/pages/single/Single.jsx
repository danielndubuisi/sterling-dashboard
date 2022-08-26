import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Overview from "../../components/overview/Overview";
import Navbar from "../../components/navbar/Navbar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CustomerDetails from "../../components/customerDetails/CustomerDetails";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single_container">
        <Overview />
        <Navbar />
        <div className="top">
          <span className="left">Customers</span>
          <KeyboardArrowRightIcon className="icon" />
          <span className="customer">Nesfield</span>
        </div>
        <hr />
        <div className="info">
          <div className="title">Nesfield</div>
          <div className="wallet">
            <div className="wallet-balance">Wallet Balance</div>
            <div className="wallet-amount">NGN 629,667.89</div>
            <div className="balance">
              <span>Available Balance: NGN 629,667.89</span>
              <span>Ledgal Balance: NGN 0.00</span>
            </div>
          </div>
        </div>
        <div className="table">
          <CustomerDetails />
        </div>
      </div>
    </div>
  );
};

export default Single;
