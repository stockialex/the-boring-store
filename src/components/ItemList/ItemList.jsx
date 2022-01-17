import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import productos from '../../assets/static/products'
import './ItemList.css'

const ItemList = () => {
    const [arrayProdutos, setArrayProductos] = useState([])
    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false)

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })

    useEffect(() => {
        productosEnStock
            .then(res => {
                setLlegoLaPromesa(true)
                setArrayProductos(res)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div className='itemList'>
            {!llegoLaPromesa ? <p>Loading...</p> : arrayProdutos.map(producto => (
                <Item
                    key={producto.id}
                    title={producto.title}
                    description={producto.description}
                    price={producto.price}
                    pictureUrl={producto.pictureUrl}
                    stock={producto.stock} 
                />
            ))}
            
        </div>
    );
}
 
export default ItemList;