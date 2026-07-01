import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";

import { supabase } from "../services/supabase";

export default function MenuItemsViewScreen({ route }: any) {
  const { categoryId, categoryName } = route.params;

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const { data, error } = await supabase
      .from("menu_items")
      .select("*")
      .eq("category_id", categoryId)
      .eq("is_available", true)
      .order("name");

    if (error) {
      console.log(error);
      return;
    }

    setItems(data || []);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F3F4F6",
        padding: 15,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        {categoryName}
      </Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              color: "gray",
              marginTop: 50,
              fontSize: 16,
            }}
          >
            No items available.
          </Text>
        }
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              padding: 15,
              marginBottom: 12,
              elevation: 2,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>

            <Text
              style={{
                marginTop: 6,
                fontSize: 18,
                color: "#16A34A",
                fontWeight: "bold",
              }}
            >
              ₹ {item.price}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
