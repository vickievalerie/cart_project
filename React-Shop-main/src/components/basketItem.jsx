function BasketItem(props) {
    const { 
        id, 
        name, 
        price, 
        quantity, 
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <ul className="collection">
            <li className="collection-item">
                <div className="item-name">{name}{" "}</div>
                <div className="quantity-change">
                    <i
                        className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove
                    </i>
                    <div className="quantity">x {quantity}</div>
                    <i 
                        className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add
                    </i> {" "}
                    = {price * quantity}{" "} руб.
                </div>
                <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i className="material-icons basket-delete">clear</i>
                </span>
            </li>
        </ul>
    );
}

export { BasketItem }