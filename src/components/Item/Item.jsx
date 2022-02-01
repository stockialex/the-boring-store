import { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import {CardContent} from '@mui/material'
import {CardMedia} from '@mui/material'
import Button from '@mui/material/Button'
import {Typography} from '@mui/material'
import { Box } from '@mui/system'
import { Link, useParams } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    const [stock, setStock] = useState(props.stock)
    const [cartUser, setCartUser] = useState(1)

    function mostrarTotales() {
        console.log(`En el inventario quedan ${stock} productos`)
        console.log(`En el carrito hay ${cartUser} productos`)
    }

    console.log(`el ID en item es: ${props.keyItem}`)

    return (
        <Card className='cardItem' sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                height='140px'
                image={props.pictureUrl}
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
            <Typography className='price'>${props.price}</Typography>
            <CardActions>
            </CardActions>
            <CardActions>
                <Box className='box-add_to_cart'>
                    <Link to={`/item/${props.keyItem}`} className='link-item'>
                        <Button size='medium' variant='contained' className='testTipo'>
                            Ver más
                        </Button>
                    </Link>
                </Box>
            </CardActions>
        </Card>
    );
}
 
export default Item;
