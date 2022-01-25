import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import './ItemCount.css'

const ItemCount = (props) => {
    const minStock = 1
    const maxStock = props.stock

    function addProduct() {
        if(props.stock >= minStock && props.cartUser < props.stockTotal) {
            props.setStock(props.stock - 1)
            props.setCartUser(props.cartUser + 1)
        } 
    }

    function removeProduct() {
        if(props.cartUser >= 1) {
            props.setCartUser(props.cartUser - 1)
            props.stock < maxStock ? 
                props.setStock(props.stock + 1) :
                props.setStock(props.stock + 0)
        }
    }

    return (
            <Box className='box-add_to_cart'>
                <Button size='small' onClick={removeProduct}>-</Button>
                <label>{props.cartUser}</label>
                <Button size='small' onClick={addProduct}>+</Button>
            </Box>
    );
}
 
export default ItemCount;