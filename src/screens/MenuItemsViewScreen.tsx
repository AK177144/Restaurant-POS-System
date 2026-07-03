import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { supabase } from "../services/supabase";
import { Colors } from "../theme/colors";

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
        backgroundColor: Colors.background,
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
              color: Colors.text,
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
              backgroundColor: Colors.background,
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
                color: Colors.textSecondary,
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
