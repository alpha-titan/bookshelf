import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiLey] = useState(
    "AIzaSyCqPZ1PjK9yiY8FmXZDc1wZYdVZV5v0tN0"
  );
  const handleChange = (event) => {
    const book = event.target.value;
    setBook(book);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Search For Books</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              onChange={handleChange}
              className="form-control mt-10"
              placeholder="Search for Books"
              autoComplete="off"
              style={{ margin: "5px" }}
            />
          </div>
          <button type="submit" className="btn btn-danger small">
            Search
          </button>
        </form>
        <br />
        <div className="book__container">
        {result.map((book) => (
          <div className="card" style={{'width':'18rem', 'margin':'10px'}}>
            {/* <img
              key={book.id}
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.title}
              style={{'height':'90px'}}
            /> */}
            <h4>{book.volumeInfo.title}</h4>
            <a style ={{'margin':'8px', 'position':'relative', 'bottom':'0'}} href={book.volumeInfo.previewLink} className="btn btn-success">Learn More</a>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Home;
