import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text>URL:</Text>
      <Text>{String(process.env.EXPO_PUBLIC_SUPABASE_URL)}</Text>

      <Text style={{ marginTop: 20 }}>KEY EXISTS:</Text>
      <Text>{String(!!process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY)}</Text>
    </View>
  );
}
