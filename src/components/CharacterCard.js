import React from "react";
import { Card, Button, CardTitle, CardText, Form, CardImg } from "reactstrap";
import CharacterList from "./CharacterList";

export default function CharacterCard(props) {
  return (
    <div style={{ paddingBottom: `2%` }}>
      <CharacterList {...props}></CharacterList>
    </div>
  );
}
