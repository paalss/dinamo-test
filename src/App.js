import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import items from "./items";

function App() {
  return (
    <div>
      <Header />
      <Main itemsInfo={items} />
      <Footer />
    </div>
  );
}

export default App;
