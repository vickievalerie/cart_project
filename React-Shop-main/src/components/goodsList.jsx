import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;
    
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };