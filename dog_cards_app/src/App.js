import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Page404 from "./Page404";
import AddOrEditDog from "./AddOrEditDog";
import AllDogs from "./AllDogs";
import { useState } from "react";

const defaultDogs = [
  { id: 1, name: "Dalma", img: "/images/dalmata.jpg" },
  { id: 2, name: "Pamacs", img: "/images/pamacs.jpg" },
  { id: 3, name: "Gizi", img: "/images/golden.jpg" },
  { id: 4, name: "Pajti", img: "/images/tacsi.jpg" },
];

function App() {
  const [dogs, setDogs] = useState(defaultDogs);
  const [currentId, setCurrentId] = useState(5);

  const addNewDog = (id, name, img) => {
    setDogs((oldArray) => [...oldArray, { id, name, img }]);
    setCurrentId(currentId + 1);
  };

  const deleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
  };

  const editDog = (id, name, picture) => {
    const dogToEdit = dogs.find((dog) => dog.id.toString() === id.toString());
    dogToEdit.name = name;
    dogToEdit.img = picture;
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<AllDogs dogs={dogs} deleteDog={deleteDog} />}
        />
        <Route
          path="/add/"
          element={
            <AddOrEditDog
              dogs={dogs}
              addNewDog={addNewDog}
              currentId={currentId}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <AddOrEditDog
              dogs={dogs}
              addNewDog={addNewDog}
              editDog={editDog}
              currentId={currentId}
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
