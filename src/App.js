import React from 'react';
import img2InSrc from './img2InSrc.jpg';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{border:"solid 1px black;max-width:100vw"}} className="container">

      <h1 className="title red">Justine Marylène MANGA</h1>

      <br /> 

      <img src={img2InSrc} alt="ImgSrc" />

      <br /><br />  

      <img src="/imgInPublic.jpg" alt="Img In Public" />

      <br /><br />

      <iframe width="320" height="240" src="https://www.youtube.com/embed/LwU798HJIrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
     
    </div>

    
  );
}

export default App;
