import { createSlice } from "@reduxjs/toolkit";
const  cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        price:0
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
            let cprice=action.payload.defaultPrice;
            if(!cprice)cprice=action.payload.price;
            if(cprice)state.price+=cprice;
            console.log(cprice)
        },
        clearCart:(state)=>{
            state.items=[];
            state.price=0;
        },
        
        removeItem: (state, action) => {
            const index = action.payload;
            let cprice =state.items[index].defaultPrice;
            if(!cprice)cprice=state.items[index].price;
            state.items.splice(index, 1); // Remove one item at the found index
            if(cprice)state.price -= cprice;
        }
        
    }
})

export const { addItem, clearCart,removeItem}= cartSlice.actions;
export default cartSlice.reducer;