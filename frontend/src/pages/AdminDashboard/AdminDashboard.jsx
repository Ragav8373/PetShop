
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./AdminDashboard.css";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const [pet, setPet] = useState({
//     name: "",
//     type: "",
//     breed: "",
//     age: "",
//     gender: "",
//     description: "",
//     image: null
//   });

//   const [pets, setPets] = useState([]);

//   // 🔄 FETCH PETS
//   const fetchPets = async () => {
//     const res = await api.get("/pets");
//     setPets(res.data);
//   };

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const handleChange = (e) => {
//     setPet({ ...pet, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setPet({ ...pet, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     Object.keys(pet).forEach((key) => {
//       formData.append(key, pet[key]);
//     });

//     try {
//       await api.post("/pets", formData);
//       alert("Pet added successfully 🐾");

//       setPet({
//         name: "",
//         type: "",
//         breed: "",
//         age: "",
//         gender: "",
//         description: "",
//         image: null
//       });

//       fetchPets(); // refresh list
//     } catch {
//       alert("Error adding pet");
//     }
//   };

//   // 🗑️ DELETE PET
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this pet?")) return;

//     await api.delete(`/pets/${id}`);
//     fetchPets();
//   };

//   // 🔐 LOGOUT
//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <div className="admin-container">

//       <div className="admin-header">
//         <h2>Admin Dashboard</h2>
//         <button className="logout-btn" onClick={handleLogout}>Logout</button>
//       </div>

//       {/* ADD PET FORM */}
//       <form onSubmit={handleSubmit} className="admin-form">
//         <input name="name" value={pet.name} placeholder="Pet Name" onChange={handleChange} required />
//         <select name="type" value={pet.type} onChange={handleChange} required>
//           <option value="">Type</option>
//           <option value="dog">Dog</option>
//           <option value="cat">Cat</option>
//           <option value="small">Small</option>
//         </select>
//         <input name="breed" value={pet.breed} placeholder="Breed" onChange={handleChange} />
//         <input name="age" value={pet.age} type="number" placeholder="Age" onChange={handleChange} />
//         <select name="gender" value={pet.gender} onChange={handleChange}>
//           <option value="">Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Pair</option>
//         </select>
//         <input type="file" onChange={handleFileChange} required />
//         <textarea name="description" value={pet.description} placeholder="Description" onChange={handleChange} />
//         <button type="submit">Add Pet</button>
//       </form>

//       {/* PET LIST */}
//       <h3>All Pets</h3>
//       <div className="admin-pet-list">
//         {pets.map((p) => (
//           <div key={p._id} className="admin-pet-card">
//             <img src={`http://localhost:5000/uploads/${p.image}`} alt={p.name} />
//             <div>
//               <h4>{p.name}</h4>
//               <p>{p.breed}</p>
//               <button className="delete-btn" onClick={() => handleDelete(p._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// // export default AdminDashboard;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./AdminDashboard.css";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   // 🐾 ADD PET STATE
//   const [pet, setPet] = useState({
//     name: "",
//     type: "",
//     breed: "",
//     age: "",
//     gender: "",
//     lifeExpectancy: "",
//     Trainability: "",
//     size: "",
//     goodwith: "",
//     grooming: "",
//     // description: "",
//     owerview: "",
//     image: null
//   });

//   const [pets, setPets] = useState([]);
//   const [adoptions, setAdoptions] = useState([]);

//   // 🔐 TOKEN
//   const token = localStorage.getItem("token");

//   // 🔄 FETCH PETS
//   const fetchPets = async () => {
//     const res = await api.get("/pets");
//     setPets(res.data);
//   };

//   // 🔄 FETCH ADOPTION REQUESTS
//   const fetchAdoptions = async () => {
//     const res = await api.get("/adoptions", {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     setAdoptions(res.data);
//   };

//   useEffect(() => {
//     fetchPets();
//     fetchAdoptions();
//   }, []);

//   // 📝 INPUT HANDLERS
//   const handleChange = (e) => setPet({ ...pet, [e.target.name]: e.target.value });
//   const handleFileChange = (e) => setPet({ ...pet, image: e.target.files[0] });

//   // ➕ ADD PET
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(pet).forEach((key) => formData.append(key, pet[key]));

//     try {
//       await api.post("/pets", formData, { headers: { Authorization: `Bearer ${token}` } });
//       alert("Pet added successfully 🐶");
//       setPet({ name: "", type: "", breed: "", age: "", gender: "", owerview: "",lifeExpectancy: "",
//     Trainability: "",
//     size: "",
//     goodwith: "",
//     grooming: "",
//     owerview: "", image: null });
//       fetchPets();
//     } catch {
//       alert("Error adding pet");
//     }
//   };

//   // 🗑️ DELETE PET
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this pet?")) return;
//     await api.delete(`/pets/${id}`, { headers: { Authorization: `Bearer ${token}` } });
//     fetchPets();
//   };

//   // ✅ MARK ADOPTION AS COMPLETED
//   const markCompleted = async (id) => {
//     await api.put(`/adoptions/${id}`, { status: "completed" }, { headers: { Authorization: `Bearer ${token}` } });
//     fetchAdoptions();
//   };

//   // 🔐 LOGOUT
//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <div className="admin-container">

//       {/* HEADER */}
//       <div className="admin-header">
//         <h2>Admin Dashboard</h2>
//         <button className="logout-btn" onClick={handleLogout}>Logout</button>
//       </div>

//       {/* ADD PET FORM */}
//       <form className="admin-form" onSubmit={handleSubmit}>
//         <input name="name" value={pet.name} placeholder="Pet Name" onChange={handleChange} required />
//         <select name="type" value={pet.type} onChange={handleChange} required>
//           <option value="">Type</option>
//           <option value="dog">Dog</option>
//           <option value="cat">Cat</option>
//           <option value="small">Small</option>
//         </select>
//         <input name="breed" value={pet.breed} placeholder="Breed" onChange={handleChange} />
//         <input name="age" value={pet.age} type="number" placeholder="Age" onChange={handleChange} />
//         <select name="gender" value={pet.gender} onChange={handleChange}>
//           <option value="">Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Pair</option>
//         </select>

//         <input type="file" onChange={handleFileChange} required />
//         <input name="lifeExpectancy" value={pet.lifeExpectancy} placeholder="Life Expectancy" onChange={handleChange} />
//         <input name="Trainability" value={pet.Trainability} placeholder="Trainability" onChange={handleChange} />
//         <input name="size" value={pet.size} placeholder="Size" onChange={handleChange} />   
//         <input name="goodwith" value={pet.goodwith} placeholder="Good With" onChange={handleChange} />
//         <input name="grooming" value={pet.grooming} placeholder="Grooming Needs" onChange={handleChange} />
//         {/* <input name="owerview" value={pet.owerview} placeholder="Overview" onChange={handleChange} /> */}
//         <textarea name="owerview" value={pet.owerview} placeholder="Overview" onChange={handleChange} />
//         <button type="submit">Add Pet</button>
//       </form>

//       {/* PET LIST */}
//       <h3>All Pets</h3>
//       <div className="admin-pet-list">
//         {pets.map((p) => (
//           <div key={p._id} className="admin-pet-card">
//             <img src={`http://localhost:5000/uploads/${p.image}`} alt={p.name} />
//             <div>
//               <h4>{p.name}</h4>
//               <p>{p.breed}</p>
//               <button className="delete-btn" onClick={() => handleDelete(p._id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>

// {/* 🛡️ ADMIN ORDER PANEL */}
// <h3>Adoption Orders</h3>

// <div className="admin-adoption-list">
//   {adoptions.map((a) => (
//     <div key={a._id} className="admin-adoption-card">
      
//       {/* Pet Image */}
//       <div className="adoption-card-left">
//         <img
//           src={`http://localhost:5000/uploads/${a.pet.image}`}
//           alt={a.pet.name}
//         />
//       </div>

//       {/* Pet + User Info */}
//       <div className="adoption-card-right">
//         <h4>Pet: {a.pet.name}</h4>
//         <p><strong>Breed:</strong> {a.pet.breed}</p>
//         <p><strong>Age:</strong> {a.pet.age} weeks</p>
//         <p><strong>Gender:</strong> {a.pet.gender}</p>

//         <h4>User Details</h4>
//         <p><strong>Name:</strong> {a.user.name}</p>
//         <p><strong>Email:</strong> {a.user.email}</p>
//         <p><strong>Mobile:</strong> {a.user.mobile}</p>
//         <p><strong>City:</strong> {a.user.city}</p>
//         <p><strong>Purpose:</strong> {a.user.purpose}</p>

//         {/* Complete Order Button */}
//         {a.status !== "completed" ? (
//           <button
//             className="complete-btn"
//             style={{
//               padding: "8px 16px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               backgroundColor: "#4CAF50",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               marginTop: "10px"
//             }}
//             onClick={async () => {
//               await markCompleted(a._id);
//               // Update local state immediately for smoother UX
//               a.status = "completed";
//               setAdoptions([...adoptions]);
//             }}
//           >
//             Complete Order
//           </button>
//         ) : (
//           <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
//             Order Completed ✅
//           </p>
//         )}
//       </div>
//     </div>
//   ))}
// </div>



//     </div>
//   );
// }

// // export default AdminDashboard;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./AdminDashboard.css";

const BASE_URL = "http://localhost:5000"; // Backend base URL

function AdminDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 🐾 Pet Form State
  const [pet, setPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    lifeExpectancy: "",
    trainability: "",
    size: "",
    goodwith: "",
    grooming: "",
    overview: "",
    image: null
  });

  const [pets, setPets] = useState([]);
  const [adoptions, setAdoptions] = useState([]);
  const [loadingPetSubmit, setLoadingPetSubmit] = useState(false);

  // 🔄 Fetch Pets
  const fetchPets = async () => {
    try {
      const res = await api.get("/pets");
      setPets(res.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  // 🔄 Fetch Adoption Requests
  const fetchAdoptions = async () => {
    try {
      const res = await api.get("/adoptions", { headers: { Authorization: `Bearer ${token}` } });
      setAdoptions(res.data);
    } catch (error) {
      console.error("Error fetching adoptions:", error);
    }
  };

  useEffect(() => {
    fetchPets();
    fetchAdoptions();
  }, []);

  // 📝 Input Handlers
  const handleChange = (e) => setPet({ ...pet, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setPet({ ...pet, image: e.target.files[0] });

  // ➕ Add Pet
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return alert("You must be logged in");

    const formData = new FormData();
    Object.keys(pet).forEach((key) => formData.append(key, pet[key]));

    try {
      setLoadingPetSubmit(true);
      await api.post("/pets", formData, { headers: { Authorization: `Bearer ${token}` } });
      alert("Pet added successfully 🐶");

      setPet({
        name: "",
        type: "",
        breed: "",
        age: "",
        gender: "",
        lifeExpectancy: "",
        trainability: "",
        size: "",
        goodwith: "",
        grooming: "",
        overview: "",
        image: null
      });

      fetchPets();
    } catch (error) {
      console.error("Error adding pet:", error);
      alert(error.response?.data?.message || "Error adding pet");
    } finally {
      setLoadingPetSubmit(false);
    }
  };

  // 🗑️ Delete Pet
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this pet?")) return;
    try {
      await api.delete(`/pets/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      fetchPets();
    } catch (error) {
      console.error("Error deleting pet:", error);
      alert("Failed to delete pet");
    }
  };

  // ✅ Mark Adoption Completed
  const markCompleted = async (id) => {
    try {
      await api.put(`/adoptions/${id}`, { status: "completed" }, { headers: { Authorization: `Bearer ${token}` } });
      setAdoptions(adoptions.map(a => a._id === id ? { ...a, status: "completed" } : a));
    } catch (error) {
      console.error("Error marking adoption completed:", error);
      alert("Failed to update adoption status");
    }
  };

  // 🔐 Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-container">

      {/* HEADER */}
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* ADD PET FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="name" value={pet.name} placeholder="Pet Name" onChange={handleChange} required />
        
        <select name="type" value={pet.type} onChange={handleChange} required>
          <option value="">Type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="small">Small</option>
        </select>
        
        <input name="breed" value={pet.breed} placeholder="Breed" onChange={handleChange} required />
        <input name="age" type="number" value={pet.age} placeholder="Age (weeks)" onChange={handleChange} required />
        
        <select name="gender" value={pet.gender} onChange={handleChange} required>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Pair">Pair</option>
        </select>
        
        <input type="file" onChange={handleFileChange} required />

        {/* Optional fields */}
        <input name="lifeExpectancy" value={pet.lifeExpectancy} placeholder="Life Expectancy" onChange={handleChange} />
        <input name="trainability" value={pet.trainability} placeholder="Trainability" onChange={handleChange} />
        <input name="size" value={pet.size} placeholder="Size" onChange={handleChange} />
        <input name="goodwith" value={pet.goodwith} placeholder="Good With" onChange={handleChange} />
        <input name="grooming" value={pet.grooming} placeholder="Grooming Needs" onChange={handleChange} />
        <textarea name="overview" value={pet.overview} placeholder="Overview" onChange={handleChange} />

        <button type="submit">{loadingPetSubmit ? "Adding..." : "Add Pet"}</button>
      </form>

      {/* PET LIST */}
      <h3>All Pets</h3>
      <div className="admin-pet-list">
        {pets.map((p) => (
          <div key={p._id} className="admin-pet-card">
            <img
              src={p.image ? `${BASE_URL}/uploads/${p.image}` : "/default-pet.png"}
              alt={p.name || "Unnamed Pet"}
            />
            <div>
              <h4>{p.name}</h4>
              <p>{p.breed}</p>
              <button className="delete-btn" onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* ADOPTION ORDERS */}
      <h3>Adoption Orders</h3>
      <div className="admin-adoption-list">
        {adoptions.map((a) => (
          <div key={a._id} className="admin-adoption-card">
            {a.pet ? (
              <>
                <div className="adoption-card-left">
                  <img
                    src={a.pet.image ? `${BASE_URL}/uploads/${a.pet.image}` : "/default-pet.png"}
                    alt={a.pet.name || "Deleted Pet"}
                  />
                </div>

                <div className="adoption-card-right">
                  <h4>Pet: {a.pet.name}</h4>
                  <p><strong>Breed:</strong> {a.pet.breed}</p>
                  <p><strong>Age:</strong> {a.pet.age} weeks</p>
                  <p><strong>Gender:</strong> {a.pet.gender}</p>

                  <h4>User Details</h4>
                  <p><strong>Name:</strong> {a.user.name}</p>
                  <p><strong>Email:</strong> {a.user.email}</p>
                  <p><strong>Mobile:</strong> {a.user.mobile}</p>
                  <p><strong>City:</strong> {a.user.city}</p>
                  <p><strong>Purpose:</strong> {a.user.purpose}</p>

                  {a.status !== "completed" ? (
                    <button className="complete-btn" onClick={() => markCompleted(a._id)}>
                      Complete Order
                    </button>
                  ) : (
                    <p className="completed-text">Order Completed ✅</p>
                  )}
                </div>
              </>
            ) : (
              <div className="adoption-card-right deleted-pet">
                <p>This pet was deleted 🐾</p>
                <h4>User Details</h4>
                <p><strong>Name:</strong> {a.user.name}</p>
                <p><strong>Email:</strong> {a.user.email}</p>
                <p><strong>Mobile:</strong> {a.user.mobile}</p>
                <p><strong>City:</strong> {a.user.city}</p>
                <p><strong>Purpose:</strong> {a.user.purpose}</p>
                {a.status !== "completed" && <p className="completed-text">Cannot complete deleted pet order</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;


