import classes from "./Circle.module.css";

const Circle = ({
  item,
  rowId = false,
  onSetValues = false,
  isInCollapsible = false,
}) => {
  if (!isInCollapsible) {
    return (
      <div
        // denne sirkelen rendres i listen
        onClick={() => onSetValues(item, rowId)}
        className={classes.circle}
        style={{ backgroundColor: item.color }}
      ></div>
    );
  }
  return (
    <div
      // Denne er i Collapsible og skal ikke være klikkbar
      className={classes.bigCircle}
      style={{ backgroundColor: item.color }}
    ></div>
  );
};

export default Circle;
