import React, { useState } from "react";
import "./PetService.css";
import groomingImage from "../../Assets/grooming.jpg";

function PetService() {

  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const services = {
    spa: 20,
    grooming: 35,
    nail: 10,
    haircut: 25,
    medical: 30,
    knot: 18,
    tick: 22
  };

  const handleServiceChange = (e) => {
    const selected = e.target.value;
    setService(selected);
    setPrice(services[selected] || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const mmpFeatures = [
    {
      icon: "👤",
      title: "Pet-First Approach",
      desc: "The groomer arrives and makes your pet feel safe and relaxed before beginning."
    },
    {
      icon: "🪞",
      title: "Skin & Coat Assessment",
      desc: "The groomer assesses your pet’s skin type and coat condition."
    },
    {
      icon: "✅",
      title: "Quality Commitment",
      desc: "We use only suitable products and deliver top-quality grooming."
    }
  ];

  const mmpOfferings = [
    { icon: "🛁", title: "Spa Bath" },
    { icon: "✂️", title: "Full Grooming" },
    { icon: "💅", title: "Nail Clipping" },
    { icon: "💇", title: "Hair Cuts" },
    { icon: "🛀", title: "Medical Bath" },
    { icon: "🐕", title: "Knot/Mats Removal" },
    { icon: "❌", title: "Anti-Tick Treatment" }
  ];

  return (
    <div className="pet-service-container">

      {/* Section 1 */}
      <section className="grooming-importance">
        <div className="left">
          <h2>Why Is Pet Grooming Important?</h2>
          <p>Kudos to you for putting your pet first!</p>
          <p>Because grooming isn’t just pampering, it’s essential care.</p>
          <p>And who doesn’t want their pet to look Purrrrfect?</p>
        </div>

        <div className="right">
          <img src={groomingImage} alt="Pet Grooming"/>
        </div>
      </section>


      {/* Section 2 */}
      <section className="mmp-section">

        <h2>
          <span style={{color:"#9B87FF"}}>Grooming Starts With</span> Care At Puppies&guppies
        </h2>

        <p>You choose your preferred time and we assign a verified professional groomer.</p>

        <div className="features">
          {mmpFeatures.map((f,i)=>(
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <h3>Puppies&guppies Offerings</h3>

        <div className="offerings">
          {mmpOfferings.map((o,i)=>(
            <div key={i} className="offering-card">
              <div className="offering-icon">{o.icon}</div>
              <p>{o.title}</p>
            </div>
          ))}
        </div>

      </section>


      {/* Booking Section */}

      <section className="booking-section">

        <h2>Book Grooming Service</h2>

        <form className="booking-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Pet Owner Name</label>
            <input type="text" placeholder="Enter your name" required/>
          </div>

          <div className="form-group">
            <label>Select Service</label>

            <select value={service} onChange={handleServiceChange} required>
              <option value="">Choose Service</option>
              <option value="spa">Spa Bath</option>
              <option value="grooming">Full Grooming</option>
              <option value="nail">Nail Clipping</option>
              <option value="haircut">Hair Cut</option>
              <option value="medical">Medical Bath</option>
              <option value="knot">Knot/Mats Removal</option>
              <option value="tick">Anti-Tick Treatment</option>
            </select>

          </div>

          <div className="form-group">
            <label>Select Date</label>
            <input type="date" required/>
          </div>

          <div className="form-group">
            <label>Select Time</label>
            <input type="time" required/>
          </div>

          <div className="form-group">
            <label>Price</label>
            <input type="text" value={price ? `$${price}` : ""} disabled/>
          </div>

          <button type="submit" className="book-btn">
            Book Service
          </button>

        </form>

      </section>


      {/* Success Popup */}

      {showPopup && (

        <div className="popup-overlay">

          <div className="popup">

            <h2>Booking Successful 🎉</h2>
            <p>Your grooming service has been booked successfully.</p>

            {/* <button onClick={()=>setShowPopup(false)}>
              OK
            </button> */}

          </div>

        </div>

      )}

    </div>
  );
}

export default PetService;