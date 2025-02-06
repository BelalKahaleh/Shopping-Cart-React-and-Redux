import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../service/cartSlice'

function Cart() {
    const { items } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: Number(quantity) }))
    }

    //----> Calculate total
    const totalPrice = items.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="flex flex-col space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white rounded shadow p-4"
                        >
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p>${item.price}</p>
                            </div>
                            <div>
                                <label className="mr-2">Quantity:</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    className="w-16 border border-gray-300 rounded px-2 py-1 mr-4"
                                />
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right font-bold text-lg">
                        Total: ${totalPrice.toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
