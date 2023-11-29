import { useState } from "react";
import PersonCard from "./PersonCard";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return <PersonCard {...person} key={person.id} />;
        })}

        <button type="button" className="btn" onClick={clearList}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
