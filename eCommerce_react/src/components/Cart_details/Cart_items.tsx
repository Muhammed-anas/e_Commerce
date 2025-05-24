import React, { createContext, useContext, useState, useEffect } from "react";

// shape of a cart item
export type CartItem = {
  id: number;
  price: number;
  image: string;
  quantity: number;
};

// value type of cart item
type CartItemType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  totalPrice: number;
  itemCount: number;
};


const CartContext =createContext<CartItemType  |null>(null);

export const useCart = () => {
  const context= useContext(CartContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export const CartProvider =({
  children,
  userId,
}: {
  children:React.ReactNode;
  userId: string |null;
}) => {

  
  const storageKey = userId ? `cartItems_${userId}`: "cartItems";

  // use the cart from local storage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart =localStorage.getItem(storageKey);
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        console.log(`Loaded cart from localStorage for key=${storageKey}:`, parsed);
        return parsed;
      } catch (e) {
        console.error("Failed to parse saved cart JSON:", e);
        return [];
      }
    }
    return [];
  });

  
  // updated the cart everytime  when new item will added or removed
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(cartItems));
      console.log(`Saved cart to localStorage key=${storageKey}:`, cartItems);
    } catch (e) {
      
  }
}, [cartItems, storageKey]);


  // add an item to the cart, if it already exists then update when increase the quantity
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((items) => {
      const found = items.find((i) => i.id === item.id);
      if (found) {
        return items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...items, { ...item, quantity: 1 }];
    });
  };


  // increase the quantity , if the item already exist
  const increaseQuantity = (id: number) => {
    setCartItems((items) =>
    items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 }: item
      )
 );
};

// decrease the quantity , not below 1
  const decreaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          :item
      )
    );
  };

  // remove the item
  const removeItem = (id: number) => {
    setCartItems((items) =>items.filter((item) => item.id !== id));
  };


  // total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // total number of item
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);


// return cart state function
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        totalPrice,
        itemCount,
      }} >
      {children}
    </CartContext.Provider>
  );
};
