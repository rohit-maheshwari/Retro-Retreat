import React from "react";
import { useState, useEffect } from "react";

// Components
import News from "./components/News";
import Button from "./components/Button/index";
import Navbar from "./components/Navbar";
import Goals from "./components/Goals";
import Background from "./components/InitialBackground";

// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [isGoals, setIsGoals] = useState(true);
  const [isNews, setIsNews] = useState(false);
  const [isChat, setIsChat] = useState(false);

  const goNews = (e) => {
    console.log(isNews);
    setIsNews(true);
    setIsGoals(false);
    setIsChat(false);
  };

  const goGoals = (e) => {
    console.log(isGoals);
    setIsNews(false);
    setIsGoals(true);
    setIsChat(false);
  };

  const goChat = (e) => {
    console.log(isChat);
    setIsNews(false);
    setIsGoals(false);
    setIsChat(true);
  };

  const handleGame = (e) => {
    setIsNews(false);
    setIsGoals(false);
    setIsChat(false);
  };

  document.title = "Retro Retreat";

  return (
    <div className="App">
      <Navbar
        buttons={[
          {
            text: "Goals",
            callback: goGoals,
          },
          {
            text: "News",
            callback: goNews,
          },
          {
            text: "Chat",
            callback: goChat,
          },
        ]}
      />
      <Background />
      {isNews && <News />} 
      {isGoals && <Goals />}
      <GlobalStyle />
    </div>
  );
}

export default App;
