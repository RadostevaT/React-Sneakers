function Header() {
    return (
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
    )
}

export default Header;