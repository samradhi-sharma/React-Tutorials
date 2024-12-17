import "./styles.css";
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");
  return (

    <div className="App">
      <Router>
      <Navbar/>
      {/* Refactor this to use routes here
      {page === "home" && <Home />}
      {page === "list" && <List />}
      {page === "contact" && <Contact />} */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
      </Router>
    </div>
  );
}
