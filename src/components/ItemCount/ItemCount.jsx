import { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import {CardContent} from '@mui/material'
import {CardMedia} from '@mui/material'
import Button from '@mui/material/Button'
import {Typography} from '@mui/material'
import image from '../../assets/images/flamethrower-tbs.jpeg'
import { Box } from '@mui/system'
import './ItemCount.css'

const ItemCount = (props) => {
    const minStock = 1
    const [stock, setStock] = useState(props.stock)
    const [cartUser, setCartUser] = useState(1)

    function addProduct() {
        if(stock > 0 && cartUser < props.stock) {
            setStock(stock - 1)
            setCartUser(cartUser + 1)
            console.log(stock)
            console.log(cartUser)
        }
    }

    function removeProduct() {
        if(cartUser >= 1) {
            setCartUser(cartUser - 1)
            setStock(stock + 1)
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                height= '140px'
                image={image}
                alt='Elon Musk using the flamethrower'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {props.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Box className='box-add_to_cart'>
                    <Button size='small' onClick={addProduct}>+</Button>
                    <label>{cartUser}</label>
                    <Button size='small' onClick={removeProduct}>-</Button>
                </Box>
            </CardActions>
            <CardActions>
                <Box className='box-add_to_cart'>
                    <Button size='medium' variant='contained'>Agregar al carrito</Button>
                </Box>
            </CardActions>
        </Card>
    );
}
 
export default ItemCount;