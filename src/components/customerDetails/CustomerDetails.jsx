import "./customerDetails.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CustomerDetails = () => {
  const rows = [
    {
      transactionId: "Transaction - 5146fsf846q",
      payments: "POS Transaction Charge NGN 2.975085",
      id: 1,
      amount: "NGN 2.98",
      status: "Successful",
      billingDate: "19-02-2021",
    },
    {
      transactionId: "Transaction - 5146fsf846q",
      payments: "Wallet Top Up: NGN 5,399.99 via POS",
      id: 2,
      amount: "NGN 5400",
      status: "Successful",
      billingDate: "07-05-2016",
    },
    {
      transactionId: "Transaction - ...",
      payments: "POS Transaction Charge NGN 2.975085",
      id: 3,
      amount: "NGN 2.98",
      status: "Failed",
      billingDate: "09-18-2016",
    },
    {
      transactionId: "Transaction - 5146fsf846q",
      payments: "POS Transaction Charge NGN 2.975085",
      id: 4,
      amount: "NGN 5400",
      status: "Successful",
      billingDate: "02-11-2022",
    },
    {
      transactionId: "Transaction - ...",
      payments: "Wallet Top Up: NGN 5,399.99 via POS",
      id: 5,
      amount: "NGN 2.98",
      status: "Failed",
      billingDate: "27-05-2015",
    },
  ];
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.payments}</TableCell>
              <TableCell className="tableCell">{row.transactionId}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.billingDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerDetails;
