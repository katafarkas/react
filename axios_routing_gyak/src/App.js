import { HashRouter, Route, Routes } from "react-router-dom";
import AllRecipes from "./AllRecipes";
import "./App.css";
import OneRecipe from "./OneRecipe";
import Page404 from "./Page404";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<AllRecipes />} />
        <Route path="/recipe/:id" element={<OneRecipe />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
