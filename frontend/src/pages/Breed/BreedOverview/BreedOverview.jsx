// BreedOverview.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BreedOverview.css";

function BreedOverview() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get breed data passed via state
  const breed = location.state;

  if (!breed) {
    return (
      <div className="overview-container">
        <p>Breed information not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="overview-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <div className="overview-header">
        <img src={breed.image} alt={breed.name} className="overview-image" />
        <h1>{breed.name}</h1>
      </div>

      <section className="overview-section">
        <h2>Overview</h2>
        <ul>
          <li><strong>High Maintenance:</strong> This breed needs regular grooming and professional services for trimming or stripping.</li>
          <li><strong>Moderate Shedding:</strong> Regular brushing helps control shedding for long and silky coats.</li>
          <li><strong>Difficult to Train:</strong> Independent nature can make training challenging, but patience works wonders.</li>
          <li><strong>Personality:</strong> Sensitive and attached to one family, not very interactive with strangers. Requires gentle handling.</li>
          <li><strong>Good for New Owners:</strong> Suitable for first-time pet parents.</li>
          <li><strong>Good with Kids:</strong> Enjoys playing with kids, but kids should respect the breed’s sensitive nature.</li>
        </ul>
      </section>

      <section className="overview-section">
        <h2>Breed Info</h2>
        <p><strong>Common Nicknames:</strong> Baluchi Hound, Tazi, Tazhi Spay, Da Kochyano Spay, Sage Balochi, Ogar Afghan, Eastern Greyhound, Persian Greyhound</p>
        <p><strong>Temperament:</strong> Alert, Friendly, Intelligent, Loyal, Playful, Quiet</p>
        <p><strong>Trainability:</strong> Moderately Easy</p>
        <p><strong>Shedding:</strong> Constant</p>
        <p><strong>Grooming:</strong> High Maintenance</p>
        <p><strong>Breed Type:</strong> Constant</p>
        <p><strong>Size:</strong> Large</p>
      </section>
    </div>
  );
}

export default BreedOverview;
