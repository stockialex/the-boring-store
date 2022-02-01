import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import productos from '../../assets/static/products'
import { CircularProgress } from '@mui/material'
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = (props) => {
    const [arrayProdutos, setArrayProductos] = useState([])
    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false)
    const [category, setCategory] = useState(props.categoryId)

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
    
    console.log(`categoria: ${props.category}`)

    useEffect(() => {
        productosEnStock
            .then(res => {
                setLlegoLaPromesa(true)
                props.category === undefined ?
                    setArrayProductos(res) :
                    setArrayProductos(res.filter(     
                        (product) => product.category == props.categoryId)
                    )
            })
            .catch(err => {
                console.log(err)
            })
    },[category])

    return (
        <div className='itemList'>
            {!llegoLaPromesa ? <CircularProgress className='circular-progress' /> : arrayProdutos.map(producto => (
                <Link key={producto.id} to={`/item/${producto.id}`} className='item-list'>
                    <Item
                        keyItem={producto.id}
                        title={producto.title}
                        description={producto.description}
                        price={producto.price}
                        pictureUrl={producto.pictureUrl}
                        stock={producto.stock} 
                    />
                </Link>
            ))}
            
        </div>
    );
}
 
export default ItemList;