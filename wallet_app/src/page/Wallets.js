import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import AddWalletBox from "../components/AddWalletBox";
import ConfirmationModal from "../components/ConfirmationModal";
import WalletBox from "../components/WalletBox";
import { doApiCall, AXIOS_METHOD } from "../hooks/useApi";
import { LinearProgress } from "@mui/material";

function Wallets() {
  const [openDialog, setOpenDialog] = useState(false)
  const [currentlyDeletingId, setCurrentlyDeletingId] = useState()
  const [wallets, setWallets] = useState(null)

  useEffect(() => {
    getWallets()
  }, [])

  function getWallets() {
    doApiCall(AXIOS_METHOD.GET, "/wallets", (data) => {
      setWallets(data)
    })
  }

  function handleOpenDialog(id) {
    setCurrentlyDeletingId(id)
    setOpenDialog(true)
  }

  function handleCloseDialog() {
    setOpenDialog(false)
  }

  function handleDeletWallet() {
    doApiCall(AXIOS_METHOD.DELETE, `/wallet/${currentlyDeletingId}`, getWallets, () => {
      console.error("Error while deleting wallet")
    })
  }

  return (
    !wallets ? <LinearProgress /> : (<Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "start",
        flexWrap: "wrap"
      }}
    >
      {wallets.map(w => (
        <WalletBox key={w.id} title={w.name} value={w.balance} id={w.id} handleDeleteWallet={handleOpenDialog} />
      ))}
      <AddWalletBox />

      <ConfirmationModal openDialog={openDialog} closeDialog={handleCloseDialog} onConfirmed={handleDeletWallet} message={"Biztosan törölni szeretnéd?"} />
    </Container>)
  );
}

export default Wallets;
