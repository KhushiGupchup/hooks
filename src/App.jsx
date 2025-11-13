import React from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );
   
 

  if (loading)
     return <p className="loading">Loading products...</p>;
  if (error) 
    return <p className="error">Error: {error}</p>;
  if (!data || data.length === 0) 
    return <p className="error">No products found.</p>;

  const showItems = data.slice(0, 20);
  return (
    <div className="App">
      <div className="Heading">
        <h1>React Custom Hooks </h1>
      </div>

      <div className="item-container">
        {showItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.images?.[0]} alt={item.title} />
            <h3>{item.title}</h3>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
