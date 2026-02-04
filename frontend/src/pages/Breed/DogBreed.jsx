// Breeds.jsx
import React from 'react';
import './Breed.css';
import dog1 from "../../Assets/dog1.jpg"; // adjust ../ as needed
import d2 from "../../Assets/d2.jpg"; // adjust ../ as needed
import d3 from "../../Assets/d3.jpg"; // adjust ../ as needed
import { useNavigate } from "react-router-dom";


const breedsData = [
  {
    name: "Afghan Hound",
    image: dog1, // replace with your actual image URL
    maxWeight: "44-75 Kg",
    maxHeight: "24-27 Inc.",
    maxLife: "14 Years",
    suitableFor: ["Couple", "Citizen", "Security"]
  },
  {
    name: "Basset Hound",
    image: d2,
    maxWeight: "40-60 Kg",
    maxHeight: "11-14 Inc.",
    maxLife: "12 Years",
    suitableFor: ["Kids", "Citizen", "Security"]
  },
  {
    name: "Border Collie",
    image: d3,
    maxWeight: "30-45 Kg",
    maxHeight: "18-21 Inc.",
    maxLife: "14 Years",
    suitableFor: ["New Owner", "Kids", "Citizen", "Security"]
  }
];


function DogBreed() {
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


export default DogBreed;
