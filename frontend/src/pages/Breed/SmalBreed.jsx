// Breeds.jsx
import React from 'react';
import './Breed.css';
import s1 from "../../Assets/s1.jpg"; // adjust ../ as needed
import s2 from "../../Assets/s2.jpg"; // adjust ../ as needed
import s3 from "../../Assets/s3.jpg"; // adjust ../ as needed
import { useNavigate } from "react-router-dom";


const breedsData = [
  {
    name: "Guinea Pigs",
    image: s1, // replace with your actual image URL
    maxWeight: "1.5- 3 Kg",
    maxHeight: "8-12 Inc.",
    maxLife: "10 Years",
    suitableFor: ["Couple","Kids","Families", "Citizen", "Security","New Owner"]
  },
  {
    name: "Rabbits",
    image: s2,
    maxWeight: "2-15 Kg",
    maxHeight: "2-3 Inc.",
    maxLife: "12 Years",
   suitableFor: ["Couple","Kids","Families", "Citizen", "Security","New Owner"]
  },
  {
    name: "Hamsters",
    image: s3,
    maxWeight: "90-150 gram Kg",
    maxHeight: "3-5 Inc.",
    maxLife: "3 Years",
    suitableFor: ["Couple","Kids","Families", "Citizen", "Security","New Owner"]
  }
];


function SmalBreed() {
  const navigate = useNavigate();

  return (
    <div className="breeds-container">
      {breedsData.map((breed, index) => (
        <div
          className="breed-card"
          key={index}
          onClick={() => navigate("/breed-overview", { state: breed })}
          style={{ cursor: "pointer" }}
        >
          <img src={breed.image} alt={breed.name} className="breed-image" />
          <h3 className="breed-name">{breed.name}</h3>
          <div className="breed-info">
            <p><strong>Max-Weight:</strong> {breed.maxWeight}</p>
            <p><strong>Max-Height:</strong> {breed.maxHeight}</p>
            <p><strong>Max-life:</strong> {breed.maxLife}</p>
          </div>
          <div className="breed-suitable">
            {breed.suitableFor.map((item, idx) => (
              <span className="suitable-item" key={idx}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export default SmalBreed;
