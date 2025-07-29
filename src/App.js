import React, { useState } from "react";
import "./App.css";
import smokeyDogsImage from "./Assets/smokingdog.jpg";
import newBackground from "./Assets/IMG_2423.JPG";
import Fire from "./Fire";

function App() {
  const teamName = "Smokey Dogs 🐕";
  const teamImage = smokeyDogsImage;
  const missionStatement =
    "Slogging & Dogging, try and keep up with the pack 🐺";

  // Current active runners
  const currentAthletes = [
    { name: "Ian Luker", url: "https://strava.app.link/aMgx85ASnVb" },
    { name: "Kevin Roohan", url: "https://strava.app.link/JtidYEzSnVb" },
    { name: "Tag Locklar", url: "https://www.instagram.com/tagisit/" },
    {
      name: "Meagan O'Hare",
      url: "https://www.instagram.com/meaganoharee?igsh=cGx5cGtid3FiY2Zh",
    },
    {
      name: "Kate Harkleroad",
      url: "https://www.instagram.com/kate.harkleroad?igsh=MW1jaGY5M2gybjVvbg==",
    },
    { name: "Kelly Kaye", url: "https://www.instagram.com/jellyyy.k/" },
  ];

  // Alumni/Former athletes
  const alumni = [
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

  const [isCurrentRosterOpen, setIsCurrentRosterOpen] = useState(true);
  const [isAlumniRosterOpen, setIsAlumniRosterOpen] = useState(false);

  const toggleCurrentRoster = () => {
    setIsCurrentRosterOpen(!isCurrentRosterOpen);
  };

  const toggleAlumniRoster = () => {
    setIsAlumniRosterOpen(!isAlumniRosterOpen);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${newBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Fire />
      <header className="App-header">
        <h1>{teamName}</h1>
        <div className="Hero-card">
          <img src={teamImage} className="Team-image" alt="Smokey Dogs Team" />
          <p className="Slogan">{missionStatement}</p>
        </div>
        <div className="Roster">
          <h2
            onClick={toggleCurrentRoster}
            className={isCurrentRosterOpen ? "open" : ""}
          >
            Current Dogs 🐕
          </h2>
          <ul className={isCurrentRosterOpen ? "open" : ""}>
            {currentAthletes.map((member, index) => (
              <li key={index}>
                <a href={member.url} target="_blank" rel="noopener noreferrer">
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="Roster">
          <h2
            onClick={toggleAlumniRoster}
            className={isAlumniRosterOpen ? "open" : ""}
          >
            Honorable Dogs 🐕
          </h2>
          <ul className={isAlumniRosterOpen ? "open" : ""}>
            {alumni.map((member, index) => (
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
