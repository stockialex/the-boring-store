import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <h1 className="itemlistcontainer">{props.greeting}</h1>
    );
}
 
export default ItemListContainer;