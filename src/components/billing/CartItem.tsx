import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../theme/colors";

type Props = {
  item: any;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
}: Props) {
  return (
    <View
      style={{
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        paddingBottom: 10,
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

      <Text
        style={{
          color: Colors.text,
          marginTop: 4,
        }}
      >
        ₹{item.price} × {item.quantity}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => decreaseQuantity(item.id)}
            style={{
              backgroundColor: Colors.background,
              width: 35,
              height: 35,
              borderRadius: 18,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Colors.text,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              −
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              marginHorizontal: 15,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {item.quantity}
          </Text>

          <TouchableOpacity
            onPress={() => increaseQuantity(item.id)}
            style={{
              backgroundColor: Colors.menu,
              width: 35,
              height: 35,
              borderRadius: 18,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Colors.text,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          ₹{item.price * item.quantity}
        </Text>
      </View>
    </View>
  );
}
