import { View, Text, TouchableOpacity, Alert, } from "react-native";
import { supabase } from "../services/supabase";
import { Colors } from "../theme/colors";

export default function DashboardScreen({ navigation }: any) {
  async function logout() {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          const { error } = await supabase.auth.signOut();

          if (error) {
            Alert.alert("Error", error.message);
          }
        },
      },
    ]);
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      {/* Top Section */}
      <View>
        <Text
          style={{
            fontSize: 24,
            color: Colors.heading,
            fontWeight: "bold",
          }}
        >
          Dashboard
        </Text>

        {/* Menu Management */}
        <TouchableOpacity
          onPress={() => navigation.navigate("MenuManagement")}
          style={{
            backgroundColor: Colors.accent,
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: Colors.buttonText,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Menu Management
          </Text>
        </TouchableOpacity>

        {/* Billing */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Billing")}
          style={{
            backgroundColor: Colors.billing,
            padding: 15,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: Colors.buttonText,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Billing
          </Text>
        </TouchableOpacity>

        {/* View Menu */}
        <TouchableOpacity
          onPress={() => navigation.navigate("MenuCategories")}
          style={{
            backgroundColor: Colors.menu,
            padding: 15,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: Colors.buttonText,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <Text
              style={{
                color: Colors.buttonText,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              🍽 View Menu
            </Text>
          </Text>
        </TouchableOpacity>

        {/* Bill History */}
        <TouchableOpacity
          onPress={() => navigation.navigate("BillHistory")}
          style={{
            backgroundColor: Colors.billing,
            padding: 15,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: Colors.buttonText,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Bill History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SalesDashboard")}
          style={{
            backgroundColor: Colors.primary,
            padding: 15,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: Colors.buttonText,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Sales Dashboard
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Logout Button */}
      <TouchableOpacity
        onPress={logout}
        style={{
          backgroundColor: Colors.logout,
          padding: 15,
          borderRadius: 10,
          alignSelf: "center",
          width: "70%",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: Colors.buttonText,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );}
