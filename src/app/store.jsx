import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../service/cartSlice'

//----> Load cart items from localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cartItems')
        return serializedState ? JSON.parse(serializedState) : []
    } catch (e) {
        console.error('Could not load cart from localStorage', e)
        return []
    }
}

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: {
            items: loadFromLocalStorage(),
        },
    },
})

//----> Save cart items to localStorage whenever store changes
store.subscribe(() => {
    try {
        const { items } = store.getState().cart
        const serializedState = JSON.stringify(items)
        localStorage.setItem('cartItems', serializedState)
    } catch (e) {
        console.error('Could not save cart to localStorage', e)
    }
})

export default store
