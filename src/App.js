function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина <img className="remove-btn" width={32} height={32} src="/img/button-remove.svg" alt="Закрыть корзину." /></h2>

          <div className="cart-items">
            <div className="cart-item">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Кроссовки." />
              <div className="cart-item__inner">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" width={32} height={32} src="/img/button-remove.svg" alt="Удалить из корзины." />
            </div>
            <div className="cart-item">
              <img width={70} height={70} src="/img/sneakers/2.jpg" alt="Кроссовки." />
              <div className="cart-item__inner">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" width={32} height={32} src="/img/button-remove.svg" alt="Удалить из корзины." />
            </div>
          </div>

          <div className="drawer__bottom">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="button-green">Оформить заказ
              <img src="/img/arrow.svg" alt="Arrow right." />
              </button>
          </div>
        </div>
      </div>

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
        <div className="catalog__header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={14} height={14} src="/img/search.svg" alt="Поиск." />
            <input placeholder="Поиск ..." type="text" />
          </div>
        </div>

        <div className="catalog__wrapper">
          <div className="card">
            <div className="favourite">
              <img width={30} height={30} src="/img/heart-unliked.png" alt="Добавить в избранное." />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Фотография пары кроссовок." />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info">
              <div className="card__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button type="button">
                <img width={32} height={32} src="/img/button-plus.svg" alt="Добавить в корзину." />
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
                <img width={32} height={32} src="/img/button-plus.svg" alt="Добавить в корзину." />
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
                <img width={32} height={32} src="/img/button-plus.svg" alt="Добавить в корзину." />
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
                <img width={32} height={32} src="/img/button-plus.svg" alt="Добавить в корзину." />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
