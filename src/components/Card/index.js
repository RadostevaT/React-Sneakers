import React from 'react';
import styles from './Card.module.scss';

function Card({imageUrl, title, price, onClickFavourite, onClickAdd}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleClickPlus = () => {
        onClickAdd({imageUrl, title, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite} onClick={onClickFavourite}>
                <img width={30} height={30} src="/img/heart-unliked.png" alt="Добавить в избранное." />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Фотография пары кроссовок." />
            <p>{title}</p>
            <div className={styles.info}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button type="button" onClick={handleClickPlus}>
                    <img width={32} height={32} src={isAdded ? "/img/button-added.svg" : "/img/button-plus.svg"} alt="Добавить в корзину." />
                </button>
            </div>
        </div>
    )
}

export default Card;