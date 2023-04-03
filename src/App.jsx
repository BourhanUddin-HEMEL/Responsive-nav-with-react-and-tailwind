import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className=" text-4xl bg-purple-600">Responsive-nav-with-react-and-tailwind</h1>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
    </div>
  );
}

export default App;
