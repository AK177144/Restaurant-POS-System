import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";

import { supabase } from "../services/supabase";
import { Colors } from "../theme/colors";

export default function BillDetailsScreen({ route, navigation }: any) {
  const { billId } = route.params;

  const [bill, setBill] = useState<any>(null);
  const [billItems, setBillItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBillDetails() {
    try {
      const { data: billData, error: billError } = await supabase
        .from("bills")
        .select("*")
        .eq("id", billId)
        .single();

      if (billError) {
        console.log(billError);
        return;
      }

      setBill(billData);

      const { data: itemsData, error: itemsError } = await supabase
        .from("bill_items")
        .select("*")
        .eq("bill_id", billId);

      if (itemsError) {
        console.log(itemsError);
        return;
      }

      setBillItems(itemsData || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBillDetails();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  async function shareViaWhatsApp() {
    if (!bill?.customer_mobile) {
      Alert.alert("Error", "Customer mobile number not available");
      return;
    }

    const invoiceText = `
🍽️ MALABAR MESS HOUSE THIRUVAMBADY

Invoice No: ${bill.bill_number}

Customer: ${bill.customer_name || "Walk-In Customer"}

--------------------------------

${billItems
  .map(
    (item) =>
      `${item.item_name}
₹${item.price} × ${item.quantity} = ₹${item.subtotal}`,
  )
  .join("\n\n")}

--------------------------------

TOTAL AMOUNT: ₹${bill.total_amount}

Thank you for visiting us.

Please visit again!
`;

    const phone = `91${bill.customer_mobile}`;

    const url =
      `https://wa.me/${phone}?text=` + encodeURIComponent(invoiceText);

    try {
      await Linking.openURL(url);

      await supabase
        .from("bills")
        .update({
          whatsapp_sent: true,
        })
        .eq("id", billId);
    } catch (error) {
      console.log(error);

      Alert.alert("Error", "Unable to open WhatsApp");
    }
  }

  async function deleteBill() {
    const { error: itemsError } = await supabase
      .from("bill_items")
      .delete()
      .eq("bill_id", billId);

    if (itemsError) {
      alert(itemsError.message);
      return;
    }

    const { error: billError } = await supabase
      .from("bills")
      .delete()
      .eq("id", billId);

    if (billError) {
      alert(billError.message);
      return;
    }

    Alert.alert("Success", "Bill Deleted", [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Malabar Mess House Thiruvambady
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Bill No: {bill?.bill_number}
      </Text>

      <Text
        style={{
          marginTop: 10,
        }}
      >
        Customer Name: {bill?.customer_name || "Walk-In Customer"}
      </Text>

      <Text>Mobile Number: {bill?.customer_mobile || "-"}</Text>

      <Text>WhatsApp Sent: {bill?.whatsapp_sent ? "Yes" : "No"}</Text>

      <Text>Date: {new Date(bill?.created_at).toLocaleString()}</Text>

      <View
        style={{
          marginVertical: 20,
          borderBottomWidth: 1,
        }}
      />

      {billItems.map((item) => (
        <View
          key={item.id}
          style={{
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {item.item_name}
          </Text>

          <Text>
            ₹{item.price} × {item.quantity}
          </Text>

          <Text>Subtotal: ₹{item.subtotal}</Text>
        </View>
      ))}

      <View
        style={{
          marginVertical: 20,
          borderBottomWidth: 1,
        }}
      />

      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        Total Amount: ₹{bill?.total_amount}
      </Text>

      <Text
        style={{
          marginTop: 30,
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Thank you for visiting us.
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Please visit again!
      </Text>

      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            "Send Invoice",
            "Send invoice to customer via WhatsApp?",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Send",
                onPress: shareViaWhatsApp,
              },
            ],
          )
        }
        style={{
          backgroundColor: Colors.category,
          padding: 15,
          borderRadius: 8,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: Colors.text,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Share via WhatsApp
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={deleteBill}
        style={{
          backgroundColor: Colors.logout,
          padding: 15,
          borderRadius: 8,
          marginTop: 20,
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
          Delete Bill
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
