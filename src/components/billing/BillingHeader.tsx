import { View, Text, TextInput, TouchableOpacity } from "react-native";

type BillingHeaderProps = {
  sendWhatsApp: boolean;
  setSendWhatsApp: (value: boolean) => void;

  customerName: string;
  setCustomerName: (value: string) => void;

  customerMobile: string;
  setCustomerMobile: (value: string) => void;

  searchText: string;
  setSearchText: (value: string) => void;
};

export default function BillingHeader({
  sendWhatsApp,
  setSendWhatsApp,
  customerName,
  setCustomerName,
  customerMobile,
  setCustomerMobile,
  searchText,
  setSearchText,
}: BillingHeaderProps) {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: "#E5E7EB",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 8,
        }}
      >
        Create Bill
      </Text>

      <TouchableOpacity
        onPress={() => setSendWhatsApp(!sendWhatsApp)}
        style={{
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {sendWhatsApp
            ? "☑ Send Invoice via WhatsApp"
            : "☐ Send Invoice via WhatsApp"}
        </Text>
      </TouchableOpacity>

      {sendWhatsApp && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <TextInput
            placeholder="Customer Name"
            value={customerName}
            onChangeText={setCustomerName}
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 8,
              height: 42,
              paddingHorizontal: 12,
              marginRight: 6,
            }}
          />

          <TextInput
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={customerMobile}
            onChangeText={setCustomerMobile}
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 8,
              height: 42,
              paddingHorizontal: 12,
              marginLeft: 6,
            }}
          />
        </View>
      )}
      <TextInput
        placeholder="Search Menu Item..."
        value={searchText}
        onChangeText={setSearchText}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 12,
        }}
      />
    </View>
  );
}
