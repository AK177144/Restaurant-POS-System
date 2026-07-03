import React from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { Colors } from "../../theme/colors";

type CurrentOrderPanelProps = {
  cart: any[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalAmount: number;
};

export default function CurrentOrderPanel({
  cart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  totalAmount,
}: CurrentOrderPanelProps) {
  const totalItems = cart.length;

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  function confirmClearCart() {
    Alert.alert("Clear Cart", "Are you sure you want to remove all items?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Clear",
        style: "destructive",
        onPress: clearCart,
      },
    ]);
  }

  return (
    <View
      style={{
        backgroundColor: Colors.background,
        borderTopWidth: 1,
        borderColor: Colors.border,
        padding: 15,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        🛒 Current Order
      </Text>

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          style={{
            maxHeight: 120,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          )}
        />
      )}

      <View
        style={{
          marginTop: 10,
          borderTopWidth: 1,
          borderColor: Colors.border,
          paddingTop: 15,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Items : {totalItems}
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 4,
          }}
        >
          Quantity : {totalQuantity}
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            color: Colors.primary,
            marginTop: 10,
          }}
        >
          Total : ₹ {totalAmount}
        </Text>

        <TouchableOpacity
          onPress={confirmClearCart}
          style={{
            backgroundColor: Colors.background,
            padding: 12,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: Colors.text,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Clear Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
