import { useState } from "react";

const Main = ({ itemsInfo }) => {
  const [filter, setFilter] = useState({ color: "green", category: "orange" });
  console.log(filter);

  // for hvert filter, sjekk om item har den key'en, og se om den er lik filter key'en
  const filteredItems = itemsInfo.filter(
    (item) =>
      (filter === "all") ||
      item.color === filter.color ||
      item.category === filter.category
  );

  const toggle = (incomingValue) => {
    if (typeof incomingValue === "string") {
      if (filter === "all") {
        setFilter("");
      } else {
        setFilter("all");
      }
    } else {
      const incomingObj = incomingValue;
      // filter state må oppdateres
      // sjekk om filteret allerede har incoming object property verdi
      for (const prop in filter) {
        const incomingObjProp = incomingObj[Object.keys(incomingObj)[0]];
        if (filter[prop] === incomingObjProp) {
          setFilter((currentState) => {
            // filteret har allerede den der som prop, fjern verdien dens
            return { ...currentState, ...(incomingObj[prop] = "") };
          });
        }
      }

      setFilter((currentState) => {
        // object property med den verdien finnes ikke, så bare overskriv obj prop med innkommende obj prop
        return { ...currentState, ...incomingObj };
      });
    }
  };

  return (
    <main>
      <p>Stikktittel</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        numquam tempora, iste assumenda quos eius quas labore doloribus rem at
        cumque! Voluptatibus, rerum doloremque laboriosam nostrum tenetur
        distinctio similique quidem.
      </p>
      <div className="filterlist">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => toggle("all")}
        >
          Vis alle
        </button>
        <b>color</b>
        <button
          className={filter.color === "green" ? "active" : ""}
          onClick={() => toggle({ color: "green" })}
        >
          Green
        </button>
        <button
          className={filter.color === "yellow" ? "active" : ""}
          onClick={() => toggle({ color: "yellow" })}
        >
          Yellow
        </button>
        <button
          className={filter.color === "red" ? "active" : ""}
          onClick={() => toggle({ color: "red" })}
        >
          Red
        </button>{" "}
        <b>Category</b>
        <button
          className={filter.category === "apple" ? "active" : ""}
          onClick={() => toggle({ category: "apple" })}
        >
          Apple
        </button>
        <button
          className={filter.category === "orange" ? "active" : ""}
          onClick={() => toggle({ category: "orange" })}
        >
          Orange
        </button>
        <button
          className={filter.category === "carrot" ? "active" : ""}
          onClick={() => toggle({ category: "carrot" })}
        >
          Carrot
        </button>
        <button
          className={filter.category === "kiwi" ? "active" : ""}
          onClick={() => toggle({ category: "kiwi" })}
        >
          Kiwi
        </button>
      </div>
      <div className="itemslist">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="circle"
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default Main;
