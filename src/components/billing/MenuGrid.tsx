import { FlatList, TouchableOpacity, View, Text } from "react-native";

type MenuGridProps = {
  menuItems: any[];
  searchText: string;
  selectedCategory: string;
  cart: any[];
  addToCart: (item: any) => void;
};

export default function MenuGrid({
  menuItems,
  searchText,
  selectedCategory,
  cart,
  addToCart,
}: MenuGridProps) {
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.categories?.name === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  function getCartQuantity(id: number) {
    const cartItem = cart.find((item) => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  }

  return (
    <FlatList
       style ={{ flex: 1, }}
      data={filteredItems}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 6,
        paddingBottom: 120,
        flexGrow: 0,
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      renderItem={({ item }) => {
        const qty = getCartQuantity(item.id);

        return (
          <TouchableOpacity
            onPress={() => addToCart(item)}
            style={{
              width: "48%",
              backgroundColor: "white",
              borderRadius: 12,
              padding: 15,
              marginBottom: 12,
              elevation: 3,
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                fontSize: 16,
                fontWeight: "bold",
                minHeight: 45,
              }}
            >
              {item.name}
            </Text>

            <Text
              style={{
                fontSize: 18,
                color: "#16A34A",
                fontWeight: "bold",
                marginTop: 8,
              }}
            >
              ₹ {item.price}
            </Text>

            {qty > 0 ? (
              <View
                style={{
                  marginTop: 15,
                  backgroundColor: "#DCFCE7",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#15803D",
                    fontWeight: "bold",
                  }}
                >
                  ✓ In Cart × {qty}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  marginTop: 15,
                  backgroundColor: "#2563EB",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  + Add
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      }}
    />
  );
}
