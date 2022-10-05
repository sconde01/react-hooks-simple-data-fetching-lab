import React, {useState, useEffect} from "react";

function App() {
  const [images, setImages] = useState (null);

  useEffect(()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((data)=>{
      setImages(data.message);
    });
  }, []);
  //Display a `<p>` tag with the text of "Loading..." when the component is first rendered
  if (!images) return< p>Loading...</p>
  
  return <img src= {images} alt= "A Random Dog" />;
}

export default App;