import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
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
