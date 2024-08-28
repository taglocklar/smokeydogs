import React, { useState } from "react";
import "./App.css";
import smokeyDogsImage from "./Assets/smokingdog.jpg";
import smokeyDogsBackground from "./Assets/smokeydogsbackground.jpg";
import Snow from "./Snow";

function App() {
  const teamName = "Smokey Dogs ⛷️";
  const teamImage = smokeyDogsImage;
  const missionStatement =
    "Shredding gnar and spreading good vibes, one run at a time. 😎";
  const roster = [
    { name: "Tag Locklar", url: "https://www.instagram.com/tagisit/" },
    { name: "Kelly Kaye", url: "https://www.instagram.com/jellyyy.k/" },
    {
      name: "River Huffhines",
      url: "https://www.instagram.com/theriverhuffhines/",
    },
    {
      name: "Jaymie Huffhines",
      url: "https://www.instagram.com/jaymie.machelle/",
    },
    { name: "Kaleb Greenwade", url: "https://www.instagram.com/calebwithak/" },
    { name: "Hunter Tracy", url: "https://www.instagram.com/hunter_tracy/" },
    { name: "Brandon Black", url: "https://www.instagram.com/brandonjblack/" },
  ];

  const [isRosterOpen, setIsRosterOpen] = useState(false);

  const toggleRoster = () => {
    setIsRosterOpen(!isRosterOpen);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${smokeyDogsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Snow />
      <header className="App-header">
        <h1>{teamName}</h1>
        <img src={teamImage} className="Team-image" alt="Smokey Dogs Team" />
        <div className="Mission-statement">
          <h2>Our Mission</h2>
          <p>{missionStatement}</p>
        </div>
        <div className="Roster">
          <h2 onClick={toggleRoster} className={isRosterOpen ? "open" : ""}>
            The 🐕s
          </h2>
          <ul className={isRosterOpen ? "open" : ""}>
            {roster.map((member, index) => (
              <li key={index}>
                <a href={member.url} target="_blank" rel="noopener noreferrer">
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
