import styles from './Drawer.module.scss';

function Drawer({onClose, items = []}) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.drawer}>
                <h2>Корзина <img onClick={onClose} className={styles.remove_btn} width={32} height={32} src="/img/button-remove.svg" alt="Закрыть корзину." /></h2>

                <div className={styles.cart_items}>
                    {items.map(obj => {
                        return (
                            <div className={styles.cart_item}>
                                <img src={`${obj.imageUrl}`} width={70} height={70} alt="Кроссовки." />
                                <div className={styles.cart_item__inner}>
                                    <p>{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img className={styles.remove_btn} width={32} height={32} src="/img/button-remove.svg" alt="Удалить из корзины." />
                            </div>
                        );
                    })}
                </div>

                <div className={styles.drawer__bottom}>
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
                    <button className={styles.button_green}>Оформить заказ
                        <img src="/img/arrow.svg" alt="Arrow right." />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;