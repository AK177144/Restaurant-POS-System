import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";

import CurrentOrderPanel from "./CurrentOrderPanel";
import BillingFooter from "./BillingFooter";
import { Colors } from "../../theme/colors";

type Props = {
  cart: any[];

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;

  totalAmount: number;

  loading: boolean;

  generateBill: () => void;
};

export default function CartBottomSheet({
  cart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  totalAmount,
  loading,
  generateBill,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View
      style={{
        backgroundColor: Colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 12,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
      }}
    >
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={{
          padding: 15,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 50,
              height: 5,
              backgroundColor: Colors.border,
              borderRadius: 10,
            }}
          />
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          🛒 Current Order ({cart.length})
        </Text>

        <Text
          style={{
            marginTop: 5,
            color: Colors.text,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          ₹ {totalAmount}
        </Text>

        <Text
          style={{
            color: Colors.text,
            marginTop: 5,
          }}
        >
          {expanded ? "▼ Tap to Collapse" : "▲ Tap to Expand"}
        </Text>
      </TouchableOpacity>

      {expanded && (
        <View
          style={{
            maxHeight: "75%",
          }}
        >
          <CurrentOrderPanel
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            clearCart={clearCart}
            totalAmount={totalAmount}
          />

          <BillingFooter
            totalAmount={totalAmount}
            itemCount={cart.length}
            loading={loading}
            generateBill={generateBill}
          />
        </View>
      )}
    </View>
  );
}
