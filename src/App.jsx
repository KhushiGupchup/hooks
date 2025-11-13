import React from "react";
import useFetch from "./useFetch";//this is custom hook
import "./App.css";


// url of api is pass to hook
function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );
   //above is url which will go to the useFetch hook
 
//first time when hook is use it will take time to get all data that time Loading will show
  if (loading)
     return <p className="loading">Loading products...</p>;

  //if network issue then it will show error to fetch data
  if (error) 
    return <p className="error">Error: {error}</p>;

  //if api don't have the items then this condition will be shown 
  if (!data || data.length === 0) 
    return <p className="error">No products found.</p>;

  
//here all api data will store in showItems variable
  const showItems = data;

  
  return (
    <div className="App">
      <div className="Heading">
        <h1>React Custom Hooks </h1>
      </div>
      //here the card of item will be show with image and the title of image 
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
