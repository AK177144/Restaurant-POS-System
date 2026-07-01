import { useEffect, useState,} from "react";

import { fetchCategories, fetchMenuItems } from "../services/menuService";
import { Alert } from "react-native";

import {
  getNextBillNumber,
  createBill,
  insertBillItems,
} from "../services/billService";

export default function useBilling() {
const [categories, setCategories] = useState<any[]>([]);

const [menuItems, setMenuItems] = useState<any[]>([]);

const [cart, setCart] = useState<any[]>([]);

const [loading, setLoading] = useState(false);

const [searchText, setSearchText] = useState("");

const [selectedCategory, setSelectedCategory] = useState("All");

const [customerName, setCustomerName] = useState("");

const [customerMobile, setCustomerMobile] = useState("");

const [sendWhatsApp, setSendWhatsApp] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const cats = await fetchCategories();
      const menu = await fetchMenuItems();

      setCategories(cats);
      setMenuItems(menu);
    } catch (error) {
      console.log(error);
    }
  }

  
  function addToCart(item: any) {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return previousCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem,
        );
      }

      return [
        ...previousCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function increaseQuantity(id: number) {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(id: number) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }


  function clearCart() {
    setCart([]);
  }

  
    async function generateBill() {
      try {
        setLoading(true);
        if (sendWhatsApp && !customerName.trim()) {
          Alert.alert("Error", "Please enter customer name");
          return;
        }

        if (sendWhatsApp && !customerMobile.trim()) {
          Alert.alert("Error", "Please enter customer mobile");
          return;
        }

        if (cart.length === 0) {
          Alert.alert("Error", "Cart is empty");
          return;
        }

        // Get latest bill number
        const nextBillNumber = await getNextBillNumber();

        // Create bill
        const billData = await createBill({
          bill_number: nextBillNumber,
          customer_name: customerName,
          customer_mobile: customerMobile,
          total_amount: totalAmount,
          whatsapp_sent: sendWhatsApp,
        });

        // Create bill items
        const itemsToInsert = cart.map((item) => ({
          bill_id: billData.id,
          menu_item_id: item.id,
          item_name: item.name,
          quantity: item.quantity,
          price: item.price,
          subtotal: item.price * item.quantity,
        }));

        await insertBillItems(itemsToInsert);

        // Clear the current order
        clearCart();

        // Reset customer details
        setCustomerName("");
        setCustomerMobile("");

        // Reset search
        setSearchText("");

        // Return to All category
        setSelectedCategory("All");

        // Disable WhatsApp for the next customer
        setSendWhatsApp(false);

       Alert.alert(
         "Bill Generated",
         `Bill No: ${nextBillNumber}\n\nBill generated successfully.`,
       );
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Failed to generate bill");
      } finally {
        setLoading(false);
      }
    }

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = cart.length;
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    categories,
    menuItems,
    cart,

    loading,

    searchText,
    selectedCategory,

    customerName,
    customerMobile,

    sendWhatsApp,

    totalAmount,
    totalItems,
    totalQuantity,

    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    generateBill,

    setCustomerName,
    setCustomerMobile,

    setSendWhatsApp,

    setSearchText,
    setSelectedCategory,

    loadData,
    
  };
}
