import {
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import TransactionBox from "../components/TransactionBox";
import AddIcon from "@mui/icons-material/Add";
import ConfirmationModal from "../components/ConfirmationModal";
import { useEffect, useState } from "react";
import { doApiCall, AXIOS_METHOD } from "../hooks/useApi";

function OneWallet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [wallet, setWallet] = useState();
  const [transactions, setTransacitons] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentlyDeletingId, setCurrentlyDeletingId] = useState()

  useEffect(() => {
    getWallet()
    getTransactions()
    // looks like backend bindings are delayed
    setTimeout(() => {
      getTransactions()
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getWallet() {
    doApiCall(AXIOS_METHOD.GET, `/wallet/${id}`, (data) => {
      setWallet(data)
    })
  }

  function getTransactions() {
    doApiCall(AXIOS_METHOD.POST, '/transactions', (data) => {
      setTransacitons(data.transactions)
    }, () => {
      console.error("Error while fetching transactions")
    }, { wallet_id: id, limit: 1000 }) // lapozo todo
  }

  function handleOpenConfirm(id) {
    setCurrentlyDeletingId(id)
    setOpenDialog(true)
  }

  function handleCloseDialog() {
    setOpenDialog(false)
  }

  function handleDeleteTransaction() {
    doApiCall(AXIOS_METHOD.DELETE, `/transaction/${currentlyDeletingId}`, () => {
      getWallet()
      getTransactions()
    }, () => {
      console.log("Error while deleting wallet")
    })
  }

  function handleNewTransaction() {
    navigate(`/wallets/wallet/${id}/newtransaction`);
  }

  return (
    (!wallet ? <LinearProgress /> : (
      <Container sx={{ display: "flex", alignItems: "center", mt: 3 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <Typography variant="h4" mr={2}>
              {wallet.name}
            </Typography>
            <Typography variant="h6">{wallet.balance} Ft</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <Typography variant="h6" mr={2}>
              Tranzakciók
            </Typography>
            <IconButton onClick={handleNewTransaction}>
              <AddIcon />
            </IconButton>
          </Grid>
          {!transactions ? <LinearProgress /> : (transactions.length === 0 ? (<Typography variant="h6">Jelenleg nincsenek trazakciók ehhez a wallethoz</Typography>) : (
            <Grid item xs={12}>
              {transactions.map(t => (
                <TransactionBox
                  key={t.id}
                  transactionId={t.id}
                  name={t.title}
                  date={t.created_at}
                  value={t.amount}
                  handleDeleteTransaction={handleOpenConfirm}
                />
              ))}
            </Grid>
          ))}

        </Grid>
        <ConfirmationModal onConfirmed={handleDeleteTransaction} openDialog={openDialog} closeDialog={handleCloseDialog} message={"Biztosan törölni szeretnéd?"} />
      </Container>
    ))
  );
}

export default OneWallet;
