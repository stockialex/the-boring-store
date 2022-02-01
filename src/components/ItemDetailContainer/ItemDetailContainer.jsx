import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import productos from '../../assets/static/products'
import { CircularProgress } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [promiseOk, setPromiseOk] = useState(true)

    const { itemId } = useParams()
    console.log(`el id en el parametro es ${itemId}`)

    // const getItem = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(productos)
    //     }, 2000)
    // })

    // useEffect(() => {
    //     getItem
    //         .then(res => {
    //             setPromiseOk(true)
    //             setProduct(productos.filter(item => item.id === id))
    //             console.log(product)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [id])

    useEffect(() => {
        setProduct(productos.filter(item => item.id == itemId))
        console.log(product)
    }, [itemId])

    return (
        <div className='itemDetailContainer'>
            {!promiseOk ? <CircularProgress className='circular-progress' />
                : <Link to={`/item/${itemId}`} className='link-item'><ItemDetail item={{product}} /></Link>}
        </div>
    );
}
 
export default ItemDetailContainer;