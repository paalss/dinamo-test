import { Fragment, useState } from "react";
import Collapsible from "./Collapsible";

const Main = ({ itemsInfo }) => {
  const [filter, setFilter] = useState("all");
  const [collapsibleValues, setCollapsibleValues] = useState(false);
  let rowCounter = 1;
  // console.log(filter);

  if (collapsibleValues) {
    // console.log(collapsibleValues);
    const [item, rowId] = collapsibleValues;
    console.log(item.id, rowId);
  }

  // for hvert filter, sjekk om item har den key'en, og se om den er lik filter key'en
  const filteredItems = itemsInfo.filter(
    (item) =>
      filter === "all" ||
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

      // object property med den verdien finnes ikke
      setFilter((currentState) => {
        if (currentState === "all") {
          // hvis state er "all", bare overskriv state
          return incomingObj;
        } else {
          // hvis state heller inneholder et object med et filter, bare overskriv med innkommende prop
          return { ...currentState, ...incomingObj };
        }
      });
    }
  };

  const circle = (item, rowId) => (
    <div
      onClick={() => setCollapsibleValues([item, rowId])}
      className="circle"
      style={{ backgroundColor: item.color }}
    ></div>
  );

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
        {filteredItems.map((item, index, array) => {
          // etter hvert fjerde element i filteredItems, legg inn collapsible
          // også etter den siste i arrayen
          if ((index + 1) % 4 === 0 || index + 1 === array.length) {
            let letRowCounter = rowCounter; // setState i circle trenger en lokal variabel for akkurat denne iterasjonen
            rowCounter = rowCounter + 1; // øk antall rad, men ikke bruk denne verdien før neste iterasjon
            return (
              <Fragment key={item.id}>
                {circle(item, letRowCounter)}
                <Collapsible
                  content={collapsibleValues}
                  rowCount={letRowCounter}
                />
              </Fragment>
            );
          } else {
            let letRowCounter = rowCounter; // setState i circle trenger en lokal variabel for akkurat denne iterasjonen
            return (
              <Fragment key={item.id}>{circle(item, letRowCounter)}</Fragment>
            );
          }
        })}
      </div>
    </main>
  );
};

export default Main;
