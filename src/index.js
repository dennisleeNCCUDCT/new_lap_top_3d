import React, { Children } from "react";
import { Canvas } from "@react-three/fiber";
import ReactDOM from "react-dom/client";
import "./style.css";
import Laptop from "./Laptop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas
    flat
    linear
    camera={{ fov: 60, near: 0.121, far: 2000, position: [-3, 1.5, 4] }}
  >
    <Laptop />
  </Canvas>
);
