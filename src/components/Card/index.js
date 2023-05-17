import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    const onClickButtonPlus = () => {
        alert(props.price);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img width={30} height={30} src="/img/heart-unliked.png" alt="Добавить в избранное." />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Фотография пары кроссовок." />
            <p>{props.title}</p>
            <div className={styles.info}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button type="button" onClick={onClickButtonPlus}>
                    <img width={32} height={32} src="/img/button-plus.svg" alt="Добавить в корзину." />
                </button>
            </div>
        </div>
    )
}

export default Card;