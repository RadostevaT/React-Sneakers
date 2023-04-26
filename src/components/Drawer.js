function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
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
    )
}

export default Drawer;