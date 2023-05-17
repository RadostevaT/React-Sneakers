import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://646514829c09d77a62e303c0.mockapi.io/items').then(response => {
      return response.json()
    }).then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header
        onClickCart={() => setCartOpened(true)}
      />
      <div className="catalog">
        <div className="catalog__header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={14} height={14} src="/img/search.svg" alt="Поиск." />
            <input placeholder="Поиск ..." type="text" />
          </div>
        </div>

        <div className="catalog__wrapper">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavourite={() => console.log('Добавили в закладки')}
              onClickAdd={(obj) => {onAddToCart(obj)}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
