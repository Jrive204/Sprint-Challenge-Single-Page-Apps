import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { Card, Button, FormGroup, Input, Form, Label } from "reactstrap";

// // import { charlist } from "./CharacterList";

export default function SearchForm(props) {
  return (
    <div className='formsearchdiv' alt='Character Name Search Bar'>
      <Form className='formsearch' inline>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='search' className='mr-sm-2'></Label>
          <Input
            onChange={props.handlechange}
            style={{ textAlign: `center` }}
            type='text'
            name='search'
            id='inputbox'
            placeholder='Search Name'
          />
        </FormGroup>
        <Button onClick={props.clicksearch} href={`#${props.search}`}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
