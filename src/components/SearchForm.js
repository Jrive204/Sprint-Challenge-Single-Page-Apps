import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { Card, Button, FormGroup, Input, Form, Label } from "reactstrap";

// // import { charlist } from "./CharacterList";

export default function SearchForm(props) {
//   // const [searchName, setSearchName] = useState(``);
//   // const [searchresults, setSearchResults] = useState([]);
//   // console.log(charlist, `hello`);

//   // useEffect(() => {
//   //   const results = charlist.filter(people =>
//   //     people.toLowerCase().includes(searchName.toLowerCase())
//   //   );
//   //   setSearchResults(results);
//   // }, [searchName]);
//   // console.log(props, `Searchfrm`);

//   // const handlechange = event => {
//   //   setSearchName(event.target.value);
//   // };
  return (
    <div className='formsearchdiv' alt="Character Name Search Bar">
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
//     // <section className='search-form'>
//     //   <div className='formsearchdiv' alt='Character Name Search Bar'>
//     //     <Form className='formsearch' inline>
//     //       <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
//     //         <Label for='search' className='mr-sm-2'></Label>
//     //         <Input
//     //           onChange={handlechange}
//     //           style={{ textAlign: `center` }}
//     //           type='text'
//     //           name='search'
//     //           id='name'
//     //           placeholder='Search Name'
//     //         />
//     //       </FormGroup>
//     //       {/* <Button onClick={props.clicksearch} href={`#${props.search}`}>
//     //     Submit
//     //   </Button> */}
//     //     </Form>
//     //   </div>
//     //   <div className='searchResults'>
//     //     {searchresults.map(char => (
//     //       <li key={char}>{char}</li>
//     //     ))}
//     //   </div>
//     // </section>
  );
}
