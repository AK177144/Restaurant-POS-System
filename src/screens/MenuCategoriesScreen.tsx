import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { supabase } from "../services/supabase";

export default function MenuCategoriesScreen({ navigation }: any) {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    if (error) {
      console.log(error);
      return;
    }

    setCategories(data || []);
  }

  function getCategoryIcon(name: string) {
    const icons: any = {
      Beverages: "🥤",
      Drinks: "🥤",
      Breakfast: "🍳",
      Lunch: "🍱",
      Dinner: "🍽",
      Meals: "🍛",
      Curry: "🍛",
      Snacks: "🍕",
      Pizza: "🍕",
      Burger: "🍔",
      Coffee: "☕",
      Tea: "🫖",
      Dessert: "🍰",
      IceCream: "🍨",
      Chicken: "🍗",
      Beef: "🥩",
      Fish: "🐟",
      Veg: "🥗",
    };

    return icons[name] || "🍽";
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
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        View Menu
      </Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MenuItemsView", {
                categoryId: item.id,
                categoryName: item.name,
              })
            }
            style={{
              backgroundColor: "white",
              padding: 18,
              borderRadius: 12,
              marginBottom: 12,
              elevation: 2,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {getCategoryIcon(item.name)} {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
