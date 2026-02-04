import React from "react";
import "./PetService.css";
import groomingImage from "../../Assets/grooming.jpg"; // replace with your local image path

function PetService() {
//   const groomingBenefits = [
//     { color: "#FFD27F", icon: "🛁", title: "Better Hygiene", desc: "Clean pet, fewer germs, fresher cuddles." },
//     { color: "#00C0FF", icon: "🌡️", title: "Body Temperature", desc: "A trimmed fur helps regulate body heat." },
//     { color: "#FF9ACC", icon: "🐱", title: "Shedding and Tangling", desc: "Shiny, tangle-free coat with regular grooming." },
//     { color: "#9B87FF", icon: "🐶", title: "Diseases Detection", desc: "Spot issues early, ensure timely care." },
//   ];

  const mmpFeatures = [
    { icon: "👤", title: "Pet-First Approach", desc: "The groomer arrives and makes your pet feel safe and relaxed before beginning." },
    { icon: "🪞", title: "Skin & Coat Assessment", desc: "The groomer assesses your pet’s skin type and coat condition for a tailored grooming session." },
    { icon: "✅", title: "Quality Commitment", desc: "We use only suitable products and commit to delivering top-quality grooming every time." },
  ];

  const mmpOfferings = [
    { icon: "🛁", title: "Spa Bath" },
    { icon: "✂️", title: "Full Grooming" },
    { icon: "💅", title: "Nail Clipping" },
    { icon: "💇", title: "Hair Cuts" },
    { icon: "🛀", title: "Medical Bath" },
    { icon: "🐕", title: "Knot/Mats Removal" },
    { icon: "❌", title: "Anti-Tick Treatment" },
  ];

  return (
    <div className="pet-service-container">
      {/* Section 1 */}
      <section className="grooming-importance">
        <div className="left">
          <h2>Why Is Pet Grooming Important?</h2>
          <p>Kudos to you for putting your pet first!</p>
          <p>Because grooming isn’t just pampering, it’s essential care.</p>
          <p>And, who doesn’t want their pet to look Purrrrfect?</p>
        </div>
        <div className="right">
          <img src={groomingImage} alt="Pet Grooming" />
          {/* <div className="benefits-cards">
            {groomingBenefits.map((b, i) => (
              <div key={i} className="card" style={{ backgroundColor: b.color }}>
                <div className="icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Section 2 */}
      <section className="mmp-section">
        <h2><span style={{color:"#9B87FF"}}>Grooming Starts With</span> Care At Puppies&guppies</h2>
        <p>You choose your preferred time, and we will assign a verified professional groomer for your pet.</p>

        <div className="features">
          {mmpFeatures.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <h3>Puppies&guppies Offerings</h3>
        <div className="offerings">
          {mmpOfferings.map((o, i) => (
            <div key={i} className="offering-card">
              <div className="offering-icon">{o.icon}</div>
              <p>{o.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PetService;
