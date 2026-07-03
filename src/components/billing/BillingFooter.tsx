import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Colors } from "../../theme/colors";
type BillingFooterProps = {
  totalAmount: number;
  itemCount: number;
  loading: boolean;
  generateBill: () => void;
};

export default function BillingFooter({
  totalAmount,
  itemCount,
  loading,
  generateBill,
}: BillingFooterProps) {
  return (
    <View
      style={{
        backgroundColor: Colors.background,
        borderTopWidth: 1,
        borderColor: Colors.border,

        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 8,

        elevation: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <View>
          <Text
            style={{
              color: Colors.text,
              fontSize: 14,
            }}
          >
            Total Items
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {itemCount}
          </Text>
        </View>

        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: Colors.text,
              fontSize: 14,
            }}
          >
            Grand Total
          </Text>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: Colors.secondary,
            }}
          >
            ₹ {totalAmount}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        disabled={loading || itemCount === 0}
        onPress={generateBill}
        style={{
          backgroundColor: loading || itemCount === 0 ? "#9CA3AF" : "#16A34A",
          padding: 16,
          borderRadius: 10,
        }}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text
            style={{
              color: Colors.text,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {itemCount === 0 ? "Cart is Empty" : "Generate Bill"}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

