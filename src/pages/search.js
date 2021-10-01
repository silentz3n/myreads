import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ctx } from '../Context/UserContextProvider'
import { getMyBooks, searchBooks, updateBook } from '../API/api'

const Search = (props) => {
  const history = useHistory();
  const [searcheadBooks, setSearcheadBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const { search } = useContext(ctx);
  const [refresh, SetRefresh] = useState(false);

  useEffect(() => {
    getMyBooks().then(function (data) {
      setBooks(data.books);
    });
    if (refresh) {
      SetRefresh(false);
    }
  }, [refresh, search]);

  useEffect(() => {
    searchBooks(search).then(function (data) {
      setSearcheadBooks(data.books);
    });
    if (refresh) {
      SetRefresh(false);
    }
  }, [refresh, search]);

  if (search) {
    return (
      <div>
        {searcheadBooks.map((livro) => {
          let exists = books.find(livroDaEstante => (livroDaEstante.id === livro.id))
          if (!exists) {
            return (
              <li className="card_livro" key={livro.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: livro.imageLinks ? `url(${livro.imageLinks.thumbnail})` : "",
                      }}
                    >
                    </div>
                    <div className="book-shelf-changer">
                      <select onChange={(event => handleChange(livro, event.target.value))}>
                        <option value="move" selected disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">Remove</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{livro.title}</div>
                  <div className="book-authors">{livro.authors}</div>
                </div>
              </li>
            );
          } else {
            return (
              <> </>
            )
          }
        })}
      </div>
    );
  } else {
    return (
      <>
        {history.push("/")}
      </>
    )
  }

  function handleChange(book, shelf) {
    updateBook(book, shelf).then(() => SetRefresh(true))
  }
}

export default Search;