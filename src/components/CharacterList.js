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
  const [searchName, setSearchName] = useState(``);

  useEffect(() => {
    axios
      .get(` https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        let people = response.data.results.filter(character =>
          character.name.toLowerCase().includes(searchName.toLowerCase())
        );
        console.log(people, `YOOO`);
        setCharlist(people);
        // setlist(people);
      });
  }, [page, searchName]);
  // console.log(charlist.name, `checking list`);
  // console.log(charlist, `testing`);

  console.log(charlist, `checking results`);

  // let x = [...charlist, charlist.name];
  // console.log(x, `new x array`);

  // let newlist = [];

  // charlist.forEach(name => {
  //   console.log(name, `foreach`);
  // });

  // let namesofchar = [];

  // for (let obj of charlist) {
  //   namesofchar.push(obj.name);
  // }

  // console.log(namesofchar, `please work`);

  // useEffect(() => {
  //   const results = namesofchar.filter(character =>
  //     character.toLowerCase().includes(searchName.toLowerCase())
  //   );
  //   setSearchResults(results);
  // }, [searchName]);

  const handlechange = event => {
    setSearchName(event.target.value);
  };
  const clicksearch = e => {
    setSearch(search);
  };

  return (
    <section className='character-list'>
      <section className='search-form'>
        <div className='formsearchdiv' alt='Character Name Search Bar'>
          <SearchForm
            clicksearch={clicksearch}
            handlechange={handlechange}
            searchName={searchName}
            search={search}></SearchForm>
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
              <Card style={{ textAlign: `center` }}>
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
