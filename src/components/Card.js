function Card() {
    return (
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
    )
}

export default Card;