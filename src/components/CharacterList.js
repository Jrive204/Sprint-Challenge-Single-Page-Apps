import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardLink,
  CardTitle,
  CardText
} from "reactstrap";
import Page from "./Page";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charlist, setCharlist] = useState([]);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState(``);

  useEffect(() => {
    axios
      .get(` https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        let people = response.data.results.filter(character =>
          character.name.toLowerCase().includes(searchName.toLowerCase().trim())
        );
        console.log(people, `YOOO`);
        setCharlist(people);
      });
  }, [page, searchName]);

  console.log(charlist, `checking results`);

  const handlechange = event => {
    setSearchName(event.target.value);
  };

  return (
    <section className='character-list'>
      <section className='search-form'>
        <div className='formsearchdiv' alt='Character Name Search Bar'>
          <SearchForm
            handlechange={handlechange}
            searchName={searchName}></SearchForm>
        </div>
      </section>

      <>
        {charlist.map(e => {
          return (
            <div
              style={{
                width: `100%`,
                display: `flex`,
                justifyContent: `center`,
                paddingTop: `1%`,
                paddingBottom: `1%`
              }}
              className='characters'>
              <Card
                style={{
                  textAlign: `center`,
                  width: `75%`,
                  maxWidth: `400px`,
                  display: `flex`
                }}>
                <CardBody>
                  <CardTitle>
                    <h3 id={e.name} key={e.name}>
                      {e.name}
                    </h3>
                  </CardTitle>
                  <CardSubtitle>
                    <li>Status: {e.status}</li>
                    <li>Gender: {e.gender}</li>
                  </CardSubtitle>
                </CardBody>
                <img width='100%' src={`${e.image}`} alt='Card image cap' />
                <CardBody>
                  <CardText>
                    <li>Place of origin: {e.origin.name}</li>
                    <li>Current Known Location: {e.location.name}</li>
                  </CardText>
                  <CardLink href='#'>Card Link</CardLink>
                  <CardLink href='#'>Another Link</CardLink>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </>
      <Page
        pageprev={e => (page === 1 ? null : setPage(page - 1))}
        page={page}
        pagechangeradd={e => (page >= 50 ? null : setPage(page + 1))}></Page>
    </section>
  );
}
