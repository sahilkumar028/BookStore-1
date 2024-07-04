import React, { useState, useEffect } from 'react';
import './style/Collection.css'; // Import your CSS for styling
import Card from './Card';

function Collection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/getAllBooks');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setBooks(data.books); // Update state with fetched books
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="Collection text-dark">
      <h1 className="text-center">Books Collections</h1>
      <div className="container-xl row gx-1">
        {books.map((book) => (
          <Card
            key={book._id} // Assuming each book has a unique _id
            description={book.description}
            name={book.bookName}
            mrp={book.mrp} // Format price if necessary
            url={book.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Collection;
