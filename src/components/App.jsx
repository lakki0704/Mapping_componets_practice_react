import React from "react";
// import emojipedia from "../src/emojipedia";
import Card from "./card";
import emojipedia from "./emojipedia";

function createCard(term) {
  return (
    <Card
      key={term.id}
      emoji={term.emoji}
      name={term.name}
      content={term.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
