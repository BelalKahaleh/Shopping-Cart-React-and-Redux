import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../service/cartSlice'

function ProductList() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        // Fetch products
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error))
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded shadow p-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="mb-2 w-full h-40 object-cover"
                        />
                        <h2 className="font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-2">${product.price}</p>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList
