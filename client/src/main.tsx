import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./components/Home";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <Home />
  </StrictMode>
);
