import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Bookdescription.css';
const BookDescription = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/books/${id}`);
        setBookDetails(response.data.data.attributes);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handlebackward = () => {
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <div className="book-description-container">
      {bookDetails ? (
        <div>
          <h2>Details : {bookDetails.name} </h2>
          <p>{bookDetails.description}</p>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
      <button onClick={handlebackward}>back</button>
    </div>
  );
};

export default BookDescription;
