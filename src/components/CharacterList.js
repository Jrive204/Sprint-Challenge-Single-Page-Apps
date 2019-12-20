import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardSubtitle,
  Button,
  CardLink,
  CardTitle,
  CardText,
  Form,
  CardImg
} from "reactstrap";
import Page from "./Page";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charlist, setCharlist] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(` https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        let people = response.data.results;
        console.log(`hello`, response.data.results);
        let characters = people.map(e => {
          console.log(e.name);
          return (
            <div
              style={{
                width: `100%`,
                display: `flex`,
                justifyContent: `center`
              }}
              className='characters'>
              <Card style={{ textAlign: `center` }}>
                <CardBody>
                  <CardTitle>
                    <h3>{e.name}</h3>
                  </CardTitle>
                  <CardSubtitle>
                    <li>Status:{e.status}</li>
                    <li>Gender: {e.gender}</li>
                  </CardSubtitle>
                </CardBody>
                <img width='99%' src={`${e.image}`} alt='Card image cap' />
                <CardBody>
                  <CardText>
                    <li>Place of origin:{e.origin.name}</li>
                    <li>Current Known Location:{e.location.name}</li>
                  </CardText>
                  <CardLink href='#'>Card Link</CardLink>
                  <CardLink href='#'>Another Link</CardLink>
                </CardBody>
              </Card>
            </div>
          );
        });
        setCharlist(characters);
      });
  }, [page]);

  return (
    <section className='character-list'>
      <>{charlist}</>

      <Page
        pageprev={e => (page === 1 ? null : setPage(page - 1))}
        page={page}
        pagechangeradd={e => (page >= 50 ? null : setPage(page + 1))}></Page>
    </section>
  );
}
