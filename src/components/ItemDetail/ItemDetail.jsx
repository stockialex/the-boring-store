import ItemCount from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import './ItemDetail.css'
import { Button, Box } from '@mui/material'

const ItemDetail = ({ item }) => {

    const [stock, setStock] = useState(item.stock)
    const [cartUser, setCartUser] = useState(1)

    console.log('Estoy en el item detail')
    console.log(item)

    const itemFinal = {...item.product[0]}
    console.log('Este es el objeto copiado con el spread')
    console.log(itemFinal)

    return (
        <div className="item--detail">
            <div className="item--detal__image--container">
                <img className="item-picture" src={itemFinal.pictureUrl} alt={itemFinal.title} />
            </div>
            <div className="item-info">
                <h2 className="item-title">{itemFinal.title}</h2>
                <p className="item-description">{itemFinal.description}</p>
                <p className="item-price">${itemFinal.price}</p>
                <ItemCount 
                    stockTotal={itemFinal.stock} 
                    stock={itemFinal.stock} 
                    setStock={setStock} 
                    cartUser={cartUser} 
                    setCartUser={setCartUser} 
                />
                <Box className='box-add_to_cart'>
                    <Button size='medium' variant='contained' className=''>Agregar al carro</Button>
                </Box>
            </div>
        </div>
    );
}
 
export default ItemDetail;