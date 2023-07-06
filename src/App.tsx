import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router } from "./components/Router";
import { Route } from "./components/Route";
import About from "./pages/About";
import Root from "./pages/Root";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
    </Router>
  );
}

export default App;
