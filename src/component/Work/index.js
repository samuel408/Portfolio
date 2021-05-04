import React from "react";
import photo from "../../assets/work/work/0.jpg";
import photo1 from "../../assets/work/work/1.jpg";
import photo2 from "../../assets/work/work/2.jpg";
import photo3 from "../../assets/work/work/3.jpg";
import photo4 from "../../assets/work/work/4.jpg";
import photo5 from "../../assets/work/work/5.jpg";



function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
        <div class="container">
  <div class="row">
    <a  href="https://evening-ravine-78123.herokuapp.com/" class="col-sm">
    <p>Zoo Keepr</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>  
        </a>
        <a href="https://next-gen-solutions.github.io/catch-up-on-covid/" class="col-sm">
    <p>Covid Central</p>
      <div className="flex-row">
          <img
            src={photo1}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>  
        </a>
        <a href="https://samuel408.github.io/weather-app/" class="col-sm">
    <p>Weather</p>
      <div className="flex-row">
          <img
            src={photo2}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>  
        </a>
  </div>
</div>

<div class="container">
  <div class="row">
    <a href="https://secure-escarpment-10589.herokuapp.com/" class="col-sm">
    <p>Moneyger</p>
      <div className="flex-row">
          <img
            src={photo3}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>  
        </a>
        <a href="https://dishaday.herokuapp.com/" class="col-sm">
    <p>dishAday</p>
      <div className="flex-row">
          <img
            src={photo4}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>  
        </a>
        <a href="https://infinite-beach-92379.herokuapp.com/" class="col-sm">
    <p>Tech Daily</p>
      <div className="flex-row">
          <img
            src={photo5}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>  
        </a>
  </div>
</div>
      
    </section>
  );
}
export default Gallery;