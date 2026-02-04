import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />

      <h2 className="home-heading">
        Find your perfect pet using AI recommendations
      </h2>

      <button
        className="recommend-btn"
        onClick={() => navigate("/recommendations")}
      >
        Get AI Recommendations
      </button>
    </div>
  );
}

export default Home;
