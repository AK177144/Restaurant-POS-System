import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";

import { supabase } from "../services/supabase";

export default function MenuManagementScreen({ navigation }: any) {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    setCategories(data || []);
  }

  async function addCategory() {
    if (!categoryName.trim()) {
      Alert.alert("Validation", "Enter category name");
      return;
    }

    const { error } = await supabase.from("categories").insert({
      name: categoryName,
    });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    setCategoryName("");
    fetchCategories();

    Alert.alert("Success", "Category Added");
  }

  async function deleteCategory(id: number) {
    const { error } = await supabase.from("categories").delete().eq("id", id);

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    fetchCategories();

    Alert.alert("Success", "Category Deleted");
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <FlatList
        data={categories}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        ListHeaderComponent={
          <>
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Category Management
            </Text>

            <TextInput
              placeholder="Enter Category Name"
              value={categoryName}
              onChangeText={setCategoryName}
              style={{
                borderWidth: 1,
                borderRadius: 8,
                padding: 12,
                marginBottom: 10,
              }}
            />

            <TouchableOpacity
              onPress={addCategory}
              style={{
                backgroundColor: "#2563EB",
                padding: 15,
                borderRadius: 8,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Add Category
              </Text>
            </TouchableOpacity>
          </>
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              {item.name}
            </Text>

            {/* Manage Items Button */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MenuItems", {
                  categoryId: item.id,
                  categoryName: item.name,
                })
              }
              style={{
                backgroundColor: "#2563EB",
                padding: 10,
                borderRadius: 6,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Manage Items
              </Text>
            </TouchableOpacity>

            {/* Delete Button */}
            <TouchableOpacity
              onPress={() => deleteCategory(item.id)}
              style={{
                backgroundColor: "#DC2626",
                padding: 10,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
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
