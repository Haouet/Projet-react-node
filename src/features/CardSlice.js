import {createSlice} from '@reduxjs/toolkit';
export const CardSlice = createSlice({
name : "Card",
 initialState: {
 
  Card: [],
  
  
}, 
    reducers: {
        addCard: (state,action) => {  
                               
            // state.value = action.payload;
            // state.Card.push({ ...state.value, Qts: 1 });
            // console.log(state.Card);
            const itemInCart = state.Card.find((item) => item.id === action.payload.id);
            if (itemInCart) {
              itemInCart.Qts++;
            } else {
              state.Card.push({ ...action.payload, Qts: 1 });
              
            }
          },
          incrementQuantity: (state, action) => {
            const items = state.Card.find((item) => item.id === action.payload);
            items.Qts++;
          },
          decrementQuantity: (state, action) => {
            const items = state.Card.find((item) => item.id === action.payload);
            if (items.Qts === 1) {
              items.Qts = 1
            } else {
              items.Qts--;
            }
          },        
          removeItem: (state, action) => {       
              
            state.Card= state.Card.filter((item) => item.id !== action.payload.id);
            
           
           
          },
          
    },


});
export const {addCard, removeItem ,
  incrementQuantity,
  decrementQuantity} = CardSlice.actions;
export default CardSlice.reducer;