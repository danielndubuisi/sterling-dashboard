import "./customerDetails.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { customerDetails } from "../../data/data";

const CustomerDetails = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHead">PAYMENTS</TableCell>
            <TableCell className="tableHead">TRANSACTION ID</TableCell>
            <TableCell className="tableHead">AMOUNT</TableCell>
            <TableCell className="tableHead">STATUS</TableCell>
            <TableCell className="tableHead flex">
              <span>BILLING DATE </span>
              <KeyboardArrowDownIcon className="icon" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerDetails.map((detail) => (
            <TableRow key={detail.id}>
              <TableCell className="tableCell">{detail.payments}</TableCell>
              <TableCell className="tableCell">
                {detail.transactionId}
              </TableCell>
              <TableCell className="tableCell">{detail.amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${detail.status}`}>
                  {detail.status}
                </span>
              </TableCell>
              <TableCell className="tableCell">{detail.billingDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerDetails;
