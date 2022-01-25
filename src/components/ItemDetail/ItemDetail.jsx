import Item from "../Item/Item";

const ItemDetail = ({item}) => {
    return (
        <Item 
            key={item.key}
            pictureUrl={item.pictureUrl} 
            title={item.title} 
            description={item.description}
            stock={item.stock}
            price={item.price}
        />
    );
}
 
export default ItemDetail;