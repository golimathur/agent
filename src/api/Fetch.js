import React from 'react';
import axios from 'axios';
import  { useState } from 'react';
import './api.css';

function Fetch(){

  const [books, setBooks] =  useState(null);

  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const fetchData = async () => {
      const response = await axios.get(apiURL)
      setBooks(response.data) 
  }

 return (
    <div className="App">
    <h1>Tasks List Goes here</h1>
    

      <div>
      <button className="fetch-button" onClick={fetchData}>
        Task Data
      </button>
    </div>

   
    <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(', ');

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p> <span role="img" aria-label="face">👨:{authors}</span></p>
                  <p> <span role="img" aria-label="book">📖:{book.numberOfPages} pages</span></p>
                  <p> <span role="img" aria-label="house">🏘️:{book.country}</span></p>
                  <p> <span role="img" aria-label="clock">⏰:{cleanedDate}</span></p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
)

}

export default Fetch;