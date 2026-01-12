import { useParams } from "react-router-dom";
import "./PetDetails.css";

function PetDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Pet Details</h2>
      <p>Pet ID: {id}</p>
    </div>
  );
}

export default PetDetails;
