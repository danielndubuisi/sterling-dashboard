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
import { customerList } from "../../data/data";

const CustomerList = () => {
  const navigate = useNavigate();

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
          {customerList.map((list) => (
            <TableRow
              key={list.id}
              className="tableRow"
              onClick={() => navigate("/1")}
            >
              <TableCell className="tableCell">{list.id}</TableCell>
              <TableCell className="tableCell">{list.customer}</TableCell>
              <TableCell className="tableCell">{list.setupDate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${list.status}`}>{list.status}</span>
              </TableCell>
              <TableCell className="tableCell wallet">
                {list.walletBalance}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerList;
