import { useEffect, useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { supabase } from "../services/supabase";

export default function SalesDashboardScreen() {
  const [todaySales, setTodaySales] = useState(0);
  const [billCount, setBillCount] = useState(0);
  const [averageBill, setAverageBill] = useState(0);
  const [highestBill, setHighestBill] = useState(0);
  const [lowestBill, setLowestBill] = useState(0);

  const [refreshing, setRefreshing] = useState(false);

  async function fetchSales() {
    setRefreshing(true);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { data, error } = await supabase
      .from("bills")
      .select("total_amount, created_at")
      .gte("created_at", today.toISOString());

    if (error) {
      console.log(error);
      setRefreshing(false);
      return;
    }

    if (!data || data.length === 0) {
      setTodaySales(0);
      setBillCount(0);
      setAverageBill(0);
      setHighestBill(0);
      setLowestBill(0);
      setRefreshing(false);
      return;
    }

    const totals = data.map((bill) => Number(bill.total_amount));

    const total = totals.reduce((a, b) => a + b, 0);

    setTodaySales(total);
    setBillCount(totals.length);
    setAverageBill(Math.round(total / totals.length));
    setHighestBill(Math.max(...totals));
    setLowestBill(Math.min(...totals));

    setRefreshing(false);
  }

  useEffect(() => {
    fetchSales();
  }, []);

  function StatCard({ title, value }: { title: string; value: string }) {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          padding: 20,
          marginBottom: 18,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "#666",
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#2563EB",
            marginTop: 8,
          }}
        >
          {value}
        </Text>
      </View>
    );
  }

  const today = new Date();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F4F6F8",
      }}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 40,
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchSales} />
      }
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Sales Dashboard
      </Text>

      <Text
        style={{
          color: "gray",
          marginBottom: 25,
          fontSize: 15,
        }}
      >
        {today.toDateString()}
      </Text>

      {billCount === 0 ? (
        <View
          style={{
            backgroundColor: "white",
            padding: 40,
            borderRadius: 15,
            elevation: 3,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "#666",
            }}
          >
            No sales recorded today.
          </Text>
        </View>
      ) : (
        <>
          <StatCard title="Today's Sales" value={`₹ ${todaySales}`} />

          <StatCard title="Bills Generated" value={`${billCount}`} />

          <StatCard title="Average Bill" value={`₹ ${averageBill}`} />

          <StatCard title="Highest Bill" value={`₹ ${highestBill}`} />

          <StatCard title="Lowest Bill" value={`₹ ${lowestBill}`} />
        </>
      )}
    </ScrollView>
  );
}
