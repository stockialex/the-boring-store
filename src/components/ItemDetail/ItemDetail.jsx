import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
        <div className="item--detail">
            <div className="item--detal__image--container">
                <img className="item-picture" src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="item-info">
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
                <p className="item-price">${item.price}</p>
            </div>
        </div>
    );
}
 
export default ItemDetail;