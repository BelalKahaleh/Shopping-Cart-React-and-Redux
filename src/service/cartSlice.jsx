import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem) {
               
                existingItem.quantity += 1;
            } else {
           
                state.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem && quantity > 0) {
                existingItem.quantity = quantity;
            } else if (existingItem && quantity === 0) {
               
                state.items = state.items.filter((item) => item.id !== id);
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
