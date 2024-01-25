import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './Page/Booklist';
import BookDescription from './Page/Bookdescription'; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/book/:id" element={<BookDescription />} />
    </Routes>
  </Router>
);

export default App;
