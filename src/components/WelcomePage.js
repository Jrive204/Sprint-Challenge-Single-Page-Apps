import React from "react";
import { Card, Button, CardTitle, CardText, Form, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className='welcome-page'>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        <div className='Welcome-Button'>
          <Link to={"/Characters"}>
            <Button color='secondary' size='lg'>
              Welcome
            </Button>
          </Link>
        </div>
      </header>
    </section>
  );
}
