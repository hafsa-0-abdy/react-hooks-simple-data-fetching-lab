import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Save the image URL
        setLoading(false); // Set loading to false after the image loads
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false); // Also stop loading in case of an error
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Display loading text while the image is fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the image once loaded
      )}
    </div>
  );
}

export default App;
