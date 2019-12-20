import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Form, CardImg } from "reactstrap";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";
import { Router, Route, Link, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/'>
          <WelcomePage></WelcomePage>
        </Route>
        <Route path='/Characters'>
          <CharacterCard></CharacterCard>
        </Route>
      </Switch>
    </main>
  );
}
