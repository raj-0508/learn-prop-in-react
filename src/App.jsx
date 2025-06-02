import { useState } from "react";
import Card from "./component/Card";
import "./App.css";
import CardImage from "./assets/CardImage.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Learning React Props!</h1>
      <div className="flex items-center justify-center h-screen gap-4">
        <Card
          username="Raj"
          btnText="Click Me"
          para="Hi , I am Raj"
          imgurl={CardImage}
        />
        <Card
          username="John Doe"
          btnText="Visit Profile"
          para="Hi , I am John"
        />
        <Card username="Hey!" />
      </div>
    </>
  );
}

export default App;
