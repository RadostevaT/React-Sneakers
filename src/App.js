import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="catalog">
        <div className="catalog__header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={14} height={14} src="/img/search.svg" alt="Поиск." />
            <input placeholder="Поиск ..." type="text" />
          </div>
        </div>

        <div className="catalog__wrapper">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
