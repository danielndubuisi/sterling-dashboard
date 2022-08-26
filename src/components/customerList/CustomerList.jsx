import "./customerList.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
  const navigate = useNavigate();

  const rows = [
    {
      id: 51468465,
      customer: "Nesfield Pharmacy",
      setupDate: "19-02-2021",
      status: "Active",
      walletBalance: "NGN 500.00",
    },
    {
      id: 54673194,
      customer: "Wade Pharmacy",
      setupDate: "05-07-2016",
      status: "Active",
      walletBalance: "NGN 500.00",
    },
    {
      id: 13457059,
      customer: "Howard Pharmacy",
      setupDate: "18-09-2016",
      status: "Inactive",
      walletBalance: "NGN 500.00",
    },
    {
      id: 5440754,
      customer: "Williamson Pharmacy",
      setupDate: "02-11-2012",
      status: "Active",
      walletBalance: "NGN 500.00",
    },
    {
      id: 12434679,
      customer: "Brooklyn Pharmacy",
      setupDate: "18-09-2016",
      status: "Inactive",
      walletBalance: "NGN 500.00",
    },
    {
      id: 8454134,
      customer: "Pharmacy Life",
      setupDate: "08-02-2019",
      status: "Inactive",
      walletBalance: "NGN 500.00",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHead">CUSTOMER ID</TableCell>
            <TableCell className="tableHead">CUSTOMER</TableCell>
            <TableCell className="tableHead flex">
              <span>SETUP DATE</span> <KeyboardArrowDownIcon className="icon" />
            </TableCell>
            <TableCell className="tableHead">STATUS</TableCell>
            <TableCell className="tableHead">WALLET BALANCE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              className="tableRow"
              onClick={() => navigate("/1")}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.setupDate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell wallet">
                {row.walletBalance}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerList;
