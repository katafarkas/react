import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Wallets from "./page/Wallets";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import SignUpOrLogin from "./page/SignUpOrLogin";
import Page404 from "./page/Page404";
import OneWallet from "./page/OneWallet";
import WalletAppBar from "./components/WalletAppBar";
import NewWallet from "./page/NewWallet";
import NewTransaction from "./page/NewTransaction";
import EditTransaction from "./page/EditTransaction";

function App() {
  return (
    <>
      <BrowserRouter>
        <WalletAppBar />
        <Routes>
          <Route path="/" exact element={<SignUpOrLogin />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/wallets" exact element={<Wallets />} />
          <Route path="/wallets/newwallet" exact element={<NewWallet />} />
          <Route path="/wallets/wallet/:id" exact element={<OneWallet />} />
          <Route
            path="/wallets/wallet/:id/newtransaction"
            exact
            element={<NewTransaction />}
          />
          <Route
            path="/wallets/wallet/:id/edittransaction/:id"
            exact
            element={<EditTransaction />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
