import React, { useEffect, useState } from "react";
import axios from "axios";
import './verbpage.css'

const VerbPage = () => {
  const [gis, setGis] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setGis(response.data); 
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Verb Page</h1>
      <div className="products_container">
        {Array.isArray(gis) && gis.length > 0 ? (
          gis.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.body}</p> 
            </div>
          ))
        ) : (
          <div>No data available.</div> 
        )}
      </div>
    </div>
  );
};

export default VerbPage;
