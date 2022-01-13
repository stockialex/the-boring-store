import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import './ItemCount.css'

const ItemCount = (props) => {
    const minStock = 1

    function addProduct() {
        if(props.stock >= minStock && props.cartUser < props.stockTotal) {
            props.setStock(props.stock - 1)
            props.setCartUser(props.cartUser + 1)
            console.log(props.stock)
            console.log(props.cartUser)
        }
    }

    function removeProduct() {
        if(props.cartUser >= 1) {
            props.setCartUser(props.cartUser - 1)
            props.setStock(props.stock + 1)
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