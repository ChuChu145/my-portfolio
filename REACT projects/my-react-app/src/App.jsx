import React from "react";
import Button from "my-react-app\src\Button.jsx";
import "my-react-app\src\App.css"; // Or wherever you're putting your styles

function App() {
  return (
    <main>
      <Button variant="pill" className="pink">badge</Button>
      <Button variant="pill" className="green">badge</Button>
      <Button variant="pill" className="blue">badge</Button>
      <Button variant="pill" className="yellow">badge</Button>
      <Button variant="square" className="pink">badge</Button>
      <Button variant="square" className="green">badge</Button>
      <Button variant="square" className="blue">badge</Button>
      <Button variant="square" className="yellow">badge</Button>
    </main>
  );
}

export default App;
