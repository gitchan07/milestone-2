import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import SearchBar from "./pages/SearchBar";
import PokemonList from "./pages/PokemonList";
import FavoritePage from "./pages/PokemonFavorite";


function App() {
  return (
    <div className="App">
        <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/list" element={<PokemonList />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
        </Router>
    </div>
  );
}

export default App;