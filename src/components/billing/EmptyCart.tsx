import { View, Text } from "react-native";
import { Colors } from "../../theme/colors";

export default function EmptyCart() {
  return (
    <View
      style={{
        paddingVertical: 40,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 48,
        }}
      >
        🛒
      </Text>

      <Text
        style={{
          marginTop: 15,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Your cart is empty
      </Text>

      <Text
        style={{
          color: Colors.text,
          marginTop: 5,
          textAlign: "center",
        }}
      >
        Select menu items to start billing.
      </Text>
    </View>
  );
}
