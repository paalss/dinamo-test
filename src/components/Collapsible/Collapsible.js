import classes from "./Collapsible.module.css";
import Circle from "../Circle";

const Collapsible = ({ content, rowCount }) => {
  let item, rowId;
  if (content) {
    [item, rowId] = content;
  }
  if (content && rowCount === rowId) {
    // at vi har content, betyr at bruker har klikket på en sirkel
    return (
      <div className={classes.collapsible} id={rowId}>
        <>
          {/* Item no {item.id}: Row no {rowId} */}
          <div className={classes.row}>
            <div>
              <h2>{item.title}</h2>
              <p>
                <b>Category:</b> {item.category}
              </p>
            </div>
            <div className={classes.right}>
              <button className="reset-button-style">X</button>
            </div>
          </div>
          <div className={classes.row}>
            <div>
              <Circle item={item} isInCollapsible={true} />
            </div>
            <div>
              <p className={classes.intro}>{item.intro}</p>
              <p className={classes.description}>{item.description}</p>
              <a href={item.link} className="button">Les mer om {item.title}</a>
            </div>
          </div>
        </>
      </div>
    );
  } else {
    return <div className={classes.closedCollapsible}></div>;
  }
};

export default Collapsible;
