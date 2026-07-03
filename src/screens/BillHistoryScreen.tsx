import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { supabase } from "../services/supabase";
import { Colors } from "../theme/colors";

export default function BillHistoryScreen({
  navigation,
}: any) {
  const [bills, setBills] = useState<any[]>([]);

  async function fetchBills() {
    const { data, error } = await supabase
      .from("bills")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setBills(data || []);
  }

  useFocusEffect(
    useCallback(() => {
      fetchBills();
    }, []),
  );
  return (
    <FlatList
      data={bills}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
      }}
      renderItem={({ item }) => (
        <View
          style={{
            borderWidth: 1,
            padding: 15,
            borderRadius: 10,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Bill No: {item.bill_number}
          </Text>

          <Text>Customer: {item.customer_name || "Walk-In"}</Text>

          <Text>Total: ₹{item.total_amount}</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("BillDetails", {
                billId: item.id,
              })
            }
            style={{
              backgroundColor: Colors.billing,
              padding: 10,
              borderRadius: 8,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: Colors.text,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      )}
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#6B7280",
            }}
          >
            📄 No Bills Found
          </Text>

          <Text
            style={{
              marginTop: 10,
              color: "#9CA3AF",
              fontSize: 15,
            }}
          >
            Generate your first bill to see it here.
          </Text>
        </View>
      }
    />
  );
}
