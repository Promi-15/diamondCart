import { create } from 'zustand'

let totalItemsInLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (totalItemsInLocalStorage == null) {
  totalItemsInLocalStorage = 0;
} else {
  totalItemsInLocalStorage = JSON.parse(localStorage.getItem("cart")).length;
}

export const useCartStore = create((set) => ({
  cartItems: totalItemsInLocalStorage,
  addToCart: () => set((state) => ({ cartItems: state.cartItems + 1,  })),
  removeCartItem: () => set((state) => ({ cartItems: state.cartItems - 1 })),
}))
