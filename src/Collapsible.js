import classes from "./Collapsible.module.css";

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
            <h2></h2>
          </div>
          <div className={classes.row}></div>
          <div className={classes.row}></div>
        </>
      )}
    </div>
  );
};

export default Collapsible;
