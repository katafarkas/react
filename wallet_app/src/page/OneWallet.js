import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

function OneWallet() {
  const { id } = useParams();

  return (
    <Container sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <h1>ONE WALLET {id}</h1>
    </Container>
  );
}

export default OneWallet;
