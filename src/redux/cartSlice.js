import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    // {
    //   id: 0,
    //   title: "mystery box",
    //   desc: "",
    //   img: "https://i.postimg.cc/RhZcGckP/1.png",
    //   value: "€",
    //   price: "20",
    // },
    // {
    //   id: 1,
    //   title: "1+ Skin",
    //   desc: "",
    //   img: "https://i.postimg.cc/d3V8n8bp/2.png",
    //   value: "€",
    //   price: "5",
    // },
  ],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
      console.log(JSON.parse(JSON.stringify(state)));
    },
    removeFromCart: (state, id) => {
      const itemToDelete = state.findIndex((item) => item.id == id.payload);
      state.splice(itemToDelete, 1)
    },
    updateQuantity: ({ state, id, quantity }) => {},
    clearCart: (state) => {},
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, logCart } =
  cartSlice.actions;
export default cartSlice.reducer;
