import React, { useEffect, useState } from 'react';
import { getMyBooks, updateBook } from '../../API/api'
import { useLocation } from 'react-router-dom'

function Book(props) {
  const location = useLocation();
  const options = [{ path: "currentlyReading", text: "Currently Reading" },
  { path: "wantToRead", text: "Want to Read" }, { path: "read", text: "Read" }]
  const [livros, SetLivros] = useState([]);
  const [refresh, SetRefresh] = useState(false);
  const estante = props.estante;

  useEffect(() => {
    getMyBooks().then(function (data) {
      SetLivros(data.books);
    });
    if (refresh) {
      SetRefresh(false);
    }
  }, [refresh]);

  return (
    <div>
      {livros.map((livro) => {
        if (livro.shelf === estante) {
          return (
            <li className="card_livro" key={livro.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${livro.imageLinks.thumbnail})`,
                    }}
                  >
                  </div>
                  <div className="book-shelf-changer">
                    <select onChange={(event => handleChange(livro, event.target.value))}>
                      <option value="move" selected disabled>Move to...</option>
                      {options.map(option => {
                        let paginaAtual = (location.pathname).replace("/", "");
                        paginaAtual = paginaAtual === "" ? "currentlyReading" : paginaAtual;
                        if (option.path !== paginaAtual) {
                          return (
                            <option value={option.path}>{option.text}</option>
                          )
                        }
                      })}
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

  function handleChange(book, shelf) {
    updateBook(book, shelf).then(() => SetRefresh(true))
  }
}

export default Book;