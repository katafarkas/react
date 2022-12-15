import { Container } from "@mui/material";
import AddWalletBox from "../components/AddWalletBox";
import WalletBox from "../components/WalletBox";

function Wallets() {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      <WalletBox title={"Wallet"} value="1200" id={1} />
      <WalletBox title={"Wallet"} value="1200" id={2} />
      <WalletBox title={"Wallet"} value="1200" id={3} />
      <WalletBox title={"Wallet"} value="1200" id={4} />
      <WalletBox title={"Wallet"} value="1200" id={5} />
      <WalletBox title={"Wallet"} value="1200" id={6} />
      <WalletBox title={"Wallet"} value="1200" id={7} />
      <AddWalletBox />
    </Container>
  );
}

export default Wallets;
