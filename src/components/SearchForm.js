import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm(props) {
  const [searchName, setSearchName] = useState(``);
  const [searchresults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = people.filter(people => people.toLowerCase().includes(searchName.toLowerCase()))
    setSearchResults(results)
    
  }, [searchName])

  const handlechange = event =>{
    setSearchName(event.target.value)
  }
  return(

    <section className='search-form'>   
     <div className='formsearchdiv' alt="Character Name Search Bar">
    <Form className='formsearch' inline>
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
        <Label for='search' className='mr-sm-2'></Label>
        <Input
          onChange={handlechange}
          style={{ textAlign: `center` }}
          type='text'
          name='search'
          id='name'
          placeholder='Search Name'
        />
      </FormGroup>
      {/* <Button onClick={props.clicksearch} href={`#${props.search}`}>
        Submit
      </Button> */}
    </Form>

  </div>
  <div className="searchResults">
    {searchresults.map(char=>(
    <li key={char}>{char}</li>
    ))}

  </div>
</section>;

  ) 
}
