import { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import {CardContent} from '@mui/material'
import {CardMedia} from '@mui/material'
import Button from '@mui/material/Button'
import {Typography} from '@mui/material'
import image from '../../assets/images/flamethrower-tbs.jpeg'
import { Box } from '@mui/system'
import ItemCount from '../ItemCount/ItemCount'
import './ItemCard.css'

const ItemCard = (props) => {
    const [stock, setStock] = useState(props.stock)
    const [cartUser, setCartUser] = useState(1)

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                height='140px'
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
                <ItemCount
                    stockTotal={props.stock} 
                    stock={stock} 
                    setStock={setStock} 
                    cartUser={cartUser} 
                    setCartUser={setCartUser} 
                />  
            </CardActions>
            <CardActions>
                <Box className='box-add_to_cart'>
                    <Button size='medium' variant='contained'>
                        Agregar al carro
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}
 
export default ItemCard;
