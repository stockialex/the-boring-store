import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ItemListContainer = () => {

    const { categoryId } = useParams()

    return (
        <ItemList category={categoryId} />
    );
}
 
export default ItemListContainer;