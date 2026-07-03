import { supabase } from "../services/supabase";
import { Alert } from "react-native";
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, } from "react-native";
import { Colors } from "../theme/colors";

export default function MenuItemsScreen({ route }: any) {
  const { categoryId, categoryName } = route.params;

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [menuItems, setMenuItems] = useState<any[]>([]);

  async function addMenuItem() {
    if (!itemName.trim()) {
      Alert.alert("Validation", "Enter Item Name");
      return;
    }

    if (!price.trim()) {
      Alert.alert("Validation", "Enter Price");
      return;
    }

    const { error } = await supabase.from("menu_items").insert({
      category_id: categoryId,
      name: itemName,
      price: Number(price),
      is_available: true,
    });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    Alert.alert("Success", "Menu Item Added");

    setItemName("");
    setPrice("");
    fetchMenuItems();
  }

  async function fetchMenuItems() {
    const { data, error } = await supabase
      .from("menu_items")
      .select("*")
      .eq("category_id", categoryId)
      .order("id", { ascending: true });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    setMenuItems(data || []);
  }

  async function deleteMenuItem(id: number) {
    const { error } = await supabase.from("menu_items").delete().eq("id", id);

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    fetchMenuItems();

    Alert.alert("Success", "Menu Item Deleted");
  }

  async function toggleAvailability(id: number, currentStatus: boolean) {
    const { error } = await supabase
      .from("menu_items")
      .update({
        is_available: !currentStatus,
      })
      .eq("id", id);

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    fetchMenuItems();
  }

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        {categoryName}
      </Text>

      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 12,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 12,
          marginBottom: 10,
        }}
      />

      <TouchableOpacity
        onPress={addMenuItem}
        style={{
          backgroundColor: Colors.category,
          padding: 15,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: Colors.text,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Add Item
        </Text>
      </TouchableOpacity>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        ListHeaderComponent={
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Menu Items
          </Text>
        }
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              padding: 12,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>

            <Text>₹ {item.price}</Text>

            <Text
              style={{
                marginVertical: 5,
                fontWeight: "bold",
              }}
            >
              Status:
              {item.is_available ? " Available ✅" : " Unavailable ❌"}
            </Text>

            <TouchableOpacity
              onPress={() => toggleAvailability(item.id, item.is_available)}
              style={{
                backgroundColor: Colors.accent,
                padding: 10,
                borderRadius: 6,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: Colors.text,
                  textAlign: "center",
                }}
              >
                {item.is_available ? "Mark Unavailable" : "Mark Available"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => deleteMenuItem(item.id)}
              style={{
                backgroundColor: Colors.logout,
                padding: 10,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: Colors.text,
                  textAlign: "center",
                }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
