import React from "react";
import { Card, Button, CardTitle, CardText, Form, CardImg } from "reactstrap";
import CharacterList from "./CharacterList";

export default function CharacterCard() {
  return (
    <div style={{ paddingTop: `2%`, paddingBottom: `2%` }}>
      <CharacterList></CharacterList>
    </div>
  );
}
