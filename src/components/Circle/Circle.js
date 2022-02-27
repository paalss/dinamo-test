import classes from "./Circle.module.css";

const Circle = ({
  item,
  rowId = false,
  onSetValues = false,
  isInCollapsible = false,
}) => {
  // console.log(item.id, rowId)
  // console.log(onSetValues)
  if (!isInCollapsible) {
    // denne sirkelen rendres i listen
    // debugger
    return (
      <div
        onClick={() => onSetValues(item, rowId)}
        className={classes.circle}
        style={{ backgroundColor: item.color }}
      ></div>
    );
  }
  // debugger
  return (
    <div
      // Denne er i Collapsible og skal ikke være klikkbar
      className={classes.bigCircle}
      style={{ backgroundColor: item.color }}
    ></div>
  );
};

export default Circle;
