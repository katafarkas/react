import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import TransactionBox from "../components/TransactionBox";
import AddIcon from "@mui/icons-material/Add";

function OneWallet() {
  const navigate = useNavigate();
  const { id } = useParams();
  function handleNewTransaction() {
    navigate("/wallets/wallet/:id/newtransaction");
  }

  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: 3 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", alignItems: "center", mb: 2 }}
        >
          <Typography variant="h4" mr={2}>
            Családi tárca
          </Typography>
          <Typography variant="h6">14 300 Ft</Typography>
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
        <Grid item xs={12}>
          <TransactionBox
            name={"Karácsonyi bevásárlás"}
            date={"2022.11.28."}
            value={1200}
          />
          <TransactionBox
            name={"Gyógyszertár"}
            date={"2022.12.01."}
            value={12200}
          />
          <TransactionBox name={"Ajándék"} date={"2022.12.07."} value={320} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default OneWallet;
