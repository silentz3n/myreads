import React, { useContext, useState } from 'react';
import styled from "styled-components";
import { NavLink as Link, useHistory } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import TextField from '@material-ui/core/TextField';
import Stack from '@material-ui/core/Stack';
import Autocomplete from '@material-ui/core/Autocomplete';
import { ctx } from '../../Context/UserContextProvider'


export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`


export function NavInput() {
  const [filter, setFilter] = useState("");
  const { setSearch } = useContext(ctx);
  const history = useHistory();

  const setValue = (newValue) => {
    setFilter(newValue); //  { userName: 'jane', age: 43, message:[...] }
  }

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        options={searchKeywords}
        renderInput={(params) => <TextField {...params} label="Search" />}
        className="NavInput"
        id="NavInput"
        getOptionLabel={(option) => typeof option === 'string'
          || option instanceof String ? option : ""}
        getOptionSelected={(option, value) => option === value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      {
        setSearch(filter)
      }
      {
        history.push("/search")
      }
    </Stack>
  );
}

const searchKeywords = [
  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball',
  'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes',
  'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
  'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything',
  'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi',
  'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
  'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
  'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',
  'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale',
  'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
]
