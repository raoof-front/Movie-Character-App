import { allCharacters } from "../data/data.js";
import NavBar from "./components/NavBar";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(allCharacters);

  return (
    <div>
      <NavBar numOfResult={characters.length} />
        <div className="main">
          <CharacterList characters={characters} />
          <CharacterDetail />
        </div>
    </div>
  );
}



export default App;
