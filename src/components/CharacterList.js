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
  CardImg,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Page from "./Page";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charlist, setCharlist] = useState([]);
  const [page, setPage] = useState(1);
  const [list, setlist] = useState(``);
  const [search, setSearch] = useState(``);

  useEffect(() => {
    axios
      .get(` https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        let people = response.data.results;

        // console.log(`hello`, response.data.results[1].name);
        // console.log(people[2].name, `twice`);
        let characters = people.map(e => {
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
              <Card style={{ textAlign: `center` }}>
                <CardBody>
                  <CardTitle>
                    <h3 id={e.name} key={e.name}>
                      {e.name}
                    </h3>
                  </CardTitle>
                  <CardSubtitle>
                    <li>Status:{e.status}</li>
                    <li>Gender: {e.gender}</li>
                  </CardSubtitle>
                </CardBody>
                <img width='100%' src={`${e.image}`} alt='Card image cap' />
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
        setlist(people.name);
        console.log(characters, `test`);
      });
  }, [page]);
  // console.log(charlist.name, `checking list`);
  const [searchName, setSearchName] = useState(``);
  const [searchresults, setSearchResults] = useState([]);
  console.log(list, `checking list`);

  // useEffect(() => {
  //   const results = list.filter((character, i) =>
  //     character.toLowerCase().includes(searchName.toLowerCase())
  //   );
  //   setSearchResults(results);
  // }, [searchName]);

  const handlechange = event => {
    setSearch(event.target.value);
  };
  const clicksearch = e => {
    setSearch(search);
  };

  return (
    <section className='character-list'>
      <section className='search-form'>
        <div className='formsearchdiv' alt='Character Name Search Bar'>
          <Form className='formsearch' inline>
            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
              <Label for='search' className='mr-sm-2'></Label>
              <Input
                onChange={handlechange}
                style={{ textAlign: `center` }}
                type='text'
                name='search'
                id='inputbox'
                placeholder='Search Name'
              />
            </FormGroup>
            <Button onClick={clicksearch} href={`#${search}`}>
              Submit
            </Button>
          </Form>
        </div>
        {/* <div className='searchResults'>
          {searchresults.map(char => (
            <li key={char}>{char}</li>
          ))}
        </div> */}
      </section>
      <>{charlist}</>

      <Page
        pageprev={e => (page === 1 ? null : setPage(page - 1))}
        page={page}
        pagechangeradd={e => (page >= 50 ? null : setPage(page + 1))}></Page>
    </section>
  );
}
