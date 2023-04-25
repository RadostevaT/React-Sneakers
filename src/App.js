function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__title">
          <img width={40} height={40} src="/img/logo.png" alt="Логотип магазина." />
          <div className="header__info">
            <h2>React Sneakers</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__user-nav">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="Корзина." />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/favourite.svg" alt="Избранное." />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="Профиль." />
          </li>
        </ul>
      </header>
      <div className="catalog">
        <h1>Все кроссовки</h1>

        <div className="catalog__wrapper">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Фотография пары кроссовок." />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info">
              <div className="card__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button type="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Добавить в корзину." />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Фотография пары кроссовок." />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info">
              <div className="card__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button type="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Добавить в корзину." />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Фотография пары кроссовок." />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info">
              <div className="card__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button type="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Добавить в корзину." />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Фотография пары кроссовок." />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info">
              <div className="card__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button type="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Добавить в корзину." />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
