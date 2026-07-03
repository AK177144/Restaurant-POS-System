import { ScrollView, TouchableOpacity, Text } from "react-native";
import { Colors } from "../../theme/colors";

const categoryIcons: { [key: string]: string } = {
  All: "🍽",

  Beverages: "🥤",
  Drinks: "🥤",

  Breakfast: "🍳",

  Lunch: "🍱",

  Dinner: "🍽",

  Curry: "🍛",

  Snacks: "🍕",

  Dessert: "🍰",

  IceCream: "🍨",

  Coffee: "☕",

  Tea: "🫖",

  Juice: "🧃",

  Biriyani: "🍗",

  Biryani: "🍗",

  Meals: "🍛",

  FriedRice: "🍚",

  Chinese: "🥢",

  Burger: "🍔",

  Pizza: "🍕",

  Sandwich: "🥪",

  Chicken: "🍗",

  Beef: "🥩",

  Fish: "🐟",

  Mutton: "🍖",

  Veg: "🥗",

};

type CategoryTabsProps = {
  categories: any[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function CategoryTabs({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: Colors.background,
        maxHeight: 46, // 👈 Limits the total height
        flexGrow: 0, // 👈 Prevents expansion
      }}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 4,
        alignItems: "center", // 👈 Centers the pills vertically
      }}
    >
      {/* All Category */}
      <TouchableOpacity
        onPress={() => setSelectedCategory("All")}
        style={{
          backgroundColor: selectedCategory === "All" ? "#2563EB" : "#E5E7EB",

          paddingHorizontal: 10,
          height: 38,

          justifyContent: "center",

          alignItems: "center",

          borderRadius: 18,

          marginRight: 8,

          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: selectedCategory === "All" ? "white" : "black",
            fontWeight: "600",
            fontSize: 13,
          }}
        >
          🍽 All
        </Text>
      </TouchableOpacity>

      {/* Dynamic Categories */}
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => setSelectedCategory(category.name)}
          style={{
            backgroundColor:
              selectedCategory === category.name ? "#2563EB" : "#E5E7EB",

            height: 32,

            paddingHorizontal: 12,

            borderRadius: 16,

            justifyContent: "center",

            alignItems: "center",

            marginRight: 8,
          }}
        >
          <Text
            style={{
              color: selectedCategory === category.name ? "white" : "black",

              fontWeight: "bold",

              fontSize: 13,
            }}
          >
            {categoryIcons[category.name] || "🍴"} {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
