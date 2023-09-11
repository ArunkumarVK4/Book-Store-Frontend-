import { Button } from "@mui/material";
import React from "react";
import "./book.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Book(props) {
  const { _id, name, author, description, price, image } = props.books;

  const history = useNavigate()
  const deleteData = async()=>{
      await axios.delete(`https://d-o5ba.onrender.com/books/delete/${_id}`).then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  }
  return (
  <div className="card">
    <img src={image} alt={name} />
    <article className="author-info">By {author}</article>
    <h3 id="title">{name}</h3>
    <p>{description}</p>
    <h3 id="price">Rs.{price}</h3>
    <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
    <Button onClick={deleteData}>Delete</Button>
  </div>
  )
}

export default Book;
