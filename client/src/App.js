import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './Booklist'; // Your existing BookList component
import BookDescription from './Bookdescription'; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/book/:id" element={<BookDescription />} />
    </Routes>
  </Router>
);

export default App;
