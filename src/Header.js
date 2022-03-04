import classes from "./Header.module.css";

const Header = () => (
  <header className={classes.header}>
    <nav>
      <div className={classes.circle}></div>
    </nav>
    <div className={classes.title}>
      <h1>Tittel</h1>
    </div>
  </header>
);

export default Header;
