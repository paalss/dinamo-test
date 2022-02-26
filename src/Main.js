import { Fragment, useState } from "react";

const Main = ({ itemsInfo }) => {
  const [filter, setFilter] = useState("all");
  const [collapsible, setCollapsible] = useState(false);
  let rowCounter = 1;
  // console.log(filter);

  if (collapsible) {
    // console.log(collapsible);
    const [itemId, rowId] = collapsible;
    console.log(itemId, rowId);
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

  const circle = (itemId, itemColor, rowId) => (
    <div
      onClick={() => setCollapsible([itemId, rowId])}
      className="circle"
      style={{ backgroundColor: itemColor }}
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
          // legg inn collapsible placeholder etter hvert fjerde element i filteredItems
          if (index + 1 === array.length) {
            let letRowCounter = rowCounter; // lagre en lokal (block scoped) kopi
            rowCounter = rowCounter + 1; // øk antall rad, men ikke bruk denne verdien før neste iterasjon
            let itemId, rowId;
            if (collapsible) {
              [itemId, rowId] = collapsible;
            }

            return (
              <Fragment key={item.id}>
                {circle(item.id, item.color, letRowCounter)}
                <div className="collapsible" id={rowId}>
                  {collapsible && letRowCounter === rowId && (
                    <>
                      Item no {itemId}: Row no {rowId}
                    </>
                  )}
                </div>
              </Fragment>
            );
          }
          if ((index + 1) % 4 === 0) {
            let letRowCounter = rowCounter; // lagre en lokal (block scoped) kopi
            rowCounter = rowCounter + 1; // øk antall rad, men ikke bruk denne verdien før neste iterasjon
            let itemId, rowId;
            if (collapsible) {
              [itemId, rowId] = collapsible;
            }

            return (
              <Fragment key={item.id}>
                {circle(item.id, item.color, letRowCounter)}
                <div className="collapsible" id={rowId}>
                  {collapsible && letRowCounter === rowId && (
                    <>
                      Item no {itemId}: Row no {rowId}
                    </>
                  )}
                </div>
              </Fragment>
            );
          } else {
            let letRowCounter = rowCounter; // lagre en lokal (block scoped) kopi
            return circle(item.id, item.color, letRowCounter);
          }
        })}
      </div>
    </main>
  );
};

export default Main;
