import classes from "./Collapsible.module.css";
import Circle from "./Circle";

const Collapsible = ({ content, rowCount }) => {
  let item, rowId;
  if (content) {
    [item, rowId] = content;
  }
  return (
    <div className={classes.collapsible} id={rowId}>
      {content && rowCount === rowId && (
        <>
          Item no {item.id}: Row no {rowId}
          <div className={classes.row}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.category}</p>
            </div>
            <div className={classes.right}>X</div>
          </div>
          <div className={classes.row}>
            <Circle item={item}/>
          </div>
          <div className={classes.row}></div>
        </>
      )}
    </div>
  );
};

export default Collapsible;
