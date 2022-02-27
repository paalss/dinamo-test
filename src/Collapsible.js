const Collapsible = ({ content, rowCount }) => {
  let itemId, rowId;
  if (content) {
    [itemId, rowId] = content;
  }
  return (
    <div className="collapsible" id={rowId}>
      {content && rowCount === rowId && (
        <>
          Item no {itemId}: Row no {rowId}
        </>
      )}
    </div>
  );
};

export default Collapsible