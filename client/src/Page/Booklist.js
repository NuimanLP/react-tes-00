import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'antd';
import { START_URL_STAP } from '../config.js';

const gridStyle = {
  height : '100px',
  width: '25%',
  textAlign: 'center',
};


const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await ListData();
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Card title="Book Library">
      {books.map((book) => (
        <Card.Grid key={book.id} style={gridStyle}>
          <Link to={`/book/${book.id}`}>
          <h3>{book.name}</h3>
          </Link>
        </Card.Grid>
      ))}
    </Card>
  );
};

async function ListData() {
  const response = await axios.get(START_URL_STAP);
  return response.data.data.map((d) => ({
    id: d.id,
    name: d.attributes.name,
  }));
}

export default App;
