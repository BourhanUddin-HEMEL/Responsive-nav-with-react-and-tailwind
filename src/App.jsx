import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className=" text-4xl bg-purple-600">Responsive-nav-with-react-and-tailwind</h1>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
