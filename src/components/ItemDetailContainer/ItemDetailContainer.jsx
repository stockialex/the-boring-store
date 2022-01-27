import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import productos from '../../assets/static/products'
import { CircularProgress } from '@mui/material'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [promiseOk, setPromiseOk] = useState(false)

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[0])
        }, 2000)
    })

    useEffect(() => {
        getItem
            .then(res => {
                setPromiseOk(true)
                setProduct(res)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div className='itemDetailContainer'>
            {!promiseOk ? <CircularProgress className='circular-progress' />
                : <ItemDetail item={product} />}
        </div>
    );
}
 
export default ItemDetailContainer;