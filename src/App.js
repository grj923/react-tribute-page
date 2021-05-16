import "./App.css";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";

function App() {
  return (
    <div className="App">
      <Header
        name="Ronald Belford Bon Scott"
        date="(9 July 1946 - 19 Febuary 1980)"
      />

      <Player />
    </div>
  );
}

export default App;
