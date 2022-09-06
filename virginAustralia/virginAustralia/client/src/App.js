import logo from "./logo.svg";
import "./App.css";
import Nav from "components/Nav";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;
