import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

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
        backgroundColor: "white",
        borderTopWidth: 1,
        borderColor: "#E5E7EB",

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
              color: "#666",
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
              color: "#666",
              fontSize: 14,
            }}
          >
            Grand Total
          </Text>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#16A34A",
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
              color: "white",
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

