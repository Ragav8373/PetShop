// Breeds.jsx
import React from 'react';
import './Breed.css';
import c1 from "../../Assets/c1.jpg"; // adjust ../ as needed
import c2 from "../../Assets/c2.jpg"; // adjust ../ as needed
import c3 from "../../Assets/c3.jpg"; // adjust ../ as needed
import { useNavigate } from "react-router-dom";


const breedsData = [
  {
    name: "Bengal",
    image: c1, // replace with your actual image URL
    maxWeight: "10-18 Kg",
    // maxHeight: "24-27 Inc.",
    maxLife: "12 Years",
    suitableFor: ["New Owner", "Citizen", "Security"]
  },
  {
    name: "Himalayan",
    image: c2,
    maxWeight: "9-14 Kg",
    // maxHeight: "11-14 Inc.",
    maxLife: "12 Years",
    suitableFor: ["New Owner", "Citizen", "Security"]
  },
  {
    name: "Siamese",
    image: c3,
    maxWeight: "08-12 Kg",
    // maxHeight: "18-21 Inc.",
    maxLife: "20 Years",
    suitableFor: ["New Owner", "Kids", "Citizen", "Security"]
  }
];


function CatBreed() {
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


export default CatBreed;
