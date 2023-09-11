import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Book from './Book';

// Define a function to fetch data based on the provided URL
const fetchData = async (URL) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { book: [] }; // Return an empty array or handle the error accordingly
  }
};

function Books() {
 
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const URL = "https://d-o5ba.onrender.com/books"; // You can change the URL as needed
    fetchData(URL).then((data) => {
      setBooks(data.book);
    });
  }, [books])
// console.log(books)
  return (
    <>
      <ul>
        {books && books.map((book, idx) => (
          <li key={idx}>
            <Book books={book} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Books;
