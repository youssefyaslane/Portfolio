import Home from "./components/home/Home";
import "./App.css";
import Header from "./components/header/Header";
import Scroll from "./components/scroll/Scroll";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Scroll />
    </div>
  );
}

export default App;
