import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./Components/Navbar";
import FormField from "./Components/FormField";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="************" />
    </div>
  );
}

export default App;
