import Overview from "../../components/overview/Overview";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CustomerList from "../../components/customerList/CustomerList";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        <Overview />
        <Navbar />
        <CustomerList />
      </div>
    </div>
  );
};

export default Home;
