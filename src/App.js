import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Form, CardImg } from "reactstrap";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  let axOne = `https://rickandmortyapi.com/api/character/?page=1`;

  return (
    <main>
      <Header />
      <CharacterCard></CharacterCard>
    </main>
  );
}
