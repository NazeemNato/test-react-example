import React from "react";
import { HelloWorld } from "./components/HelloWorld";


export default function App() {

  return (
    <div>
      <h1> Home </h1>
      <HelloWorld
        name={"1 + 1"}
      />
    </div>
  )
}