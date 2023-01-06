import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout"
const Home = React.lazy(() =>
  import(/* webpackChunkName: "Home" */ "./Pages/Home")
);
const About = React.lazy(() =>
  import(/* webpackChunkName: "About" */ "./Pages/About")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
