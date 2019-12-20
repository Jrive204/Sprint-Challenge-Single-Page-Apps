import React from "react";
import { Card, Button, CardTitle, CardText, Form, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className='welcome-page'>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className='main-img'
          src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          alt='rick'
        />
        <Link to={"/Characters"}>
          <Button color='secondary' size='lg'>
            Welcome
          </Button>
        </Link>
      </header>
    </section>
  );
}
