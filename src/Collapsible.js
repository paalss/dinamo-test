import classes from "./Collapsible.module.css";
import Circle from "./Circle";

const Collapsible = ({ content, rowCount }) => {
  let item, rowId;
  if (content) {
    [item, rowId] = content;
  }
  if (content && rowCount === rowId) {
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
            <div className={classes.right}>X</div>
          </div>
          <div className={classes.row}>
            <div>
              <Circle item={item} isInCollapsible={true} />
            </div>
            <div>
              <p className={classes.intro}>{item.intro}</p>
              <p>{item.description}</p>
              <a href={item.link}>Les mer om {item.title}</a>
            </div>
          </div>
        </>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Collapsible;
