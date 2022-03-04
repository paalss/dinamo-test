import { Fragment, useState } from "react";
import Circle from "./components/Circle";
import Collapsible from "./components/Collapsible";

import classes from "./Main.module.css"

const Main = ({ itemsInfo }) => {
  const [filter, setFilter] = useState("all");
  const [collapsibleValues, setCollapsibleValues] = useState(false);
  let rowCounter = 1;

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

  const setValuesHandler = (item, rowId) => {
    setCollapsibleValues([item, rowId]);
  };

  return (
    <main className="container">
      <p className={classes.smalltitle}>Stikktittel</p>
      <p className={classes.intro}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        numquam tempora, iste assumenda
      </p>
      <div className={classes.filterlist}>
        <button
          className={filter === "all" ? 'button-active' : ""}
          onClick={() => toggle("all")}
        >
          Vis alle
        </button>
        <b>Farge</b>
        <button
          className={filter.color === "green" ? 'button-active' : ""}
          onClick={() => toggle({ color: "green" })}
        >
          Grønn
        </button>
        <button
          className={filter.color === "yellow" ? 'button-active' : ""}
          onClick={() => toggle({ color: "yellow" })}
        >
          Gul
        </button>
        <button
          className={filter.color === "red" ? 'button-active' : ""}
          onClick={() => toggle({ color: "red" })}
        >
          Rød
        </button>{" "}
        <b>Kategori</b>
        <button
          className={filter.category === "eple" ? 'button-active' : ""}
          onClick={() => toggle({ category: "eple" })}
        >
          eple
        </button>
        <button
          className={filter.category === "appelsin" ? 'button-active' : ""}
          onClick={() => toggle({ category: "appelsin" })}
        >
          appelsin
        </button>
        <button
          className={filter.category === "gulrot" ? 'button-active' : ""}
          onClick={() => toggle({ category: "gulrot" })}
        >
          gulrot
        </button>
        <button
          className={filter.category === "kiwi" ? 'button-active' : ""}
          onClick={() => toggle({ category: "kiwi" })}
        >
          Kiwi
        </button>
      </div>
      <div className={classes.itemslist}>
        {filteredItems.map((item, index, array) => {
          // etter hvert fjerde element i filteredItems, legg inn collapsible
          // også etter den siste i arrayen
          const circleNo = index + 1;
          if (circleNo % 4 === 0 || circleNo === array.length) {
            let letRowCounter = rowCounter; // setState i Circle trenger en lokal variabel for akkurat denne iterasjonen
            rowCounter = rowCounter + 1; // øk antall rad, men ikke bruk denne verdien før neste iterasjon
            return (
              <Fragment key={item.id}>
                <Circle
                  item={item}
                  rowId={letRowCounter}
                  onSetValues={setValuesHandler}
                />
                <Collapsible
                  content={collapsibleValues}
                  rowCount={letRowCounter}
                />
              </Fragment>
            );
          } else {
            let letRowCounter = rowCounter; // setState i Circle trenger en lokal variabel for akkurat denne iterasjonen
            return (
              <Fragment key={item.id}>
                <Circle
                  item={item}
                  rowId={letRowCounter}
                  onSetValues={setValuesHandler}
                />
              </Fragment>
            );
          }
        })}
      </div>
      <button>Vis flere</button>
    </main>
  );
};

export default Main;
