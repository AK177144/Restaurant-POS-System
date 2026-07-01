import { supabase } from "./supabase";

export async function getNextBillNumber() {
  const { data } = await supabase
    .from("bills")
    .select("bill_number")
    .order("id", { ascending: false })
    .limit(1)
    .single();

  let nextBill = "1001";

  if (data?.bill_number) {
    nextBill = (parseInt(data.bill_number) + 1).toString();
  }

  return nextBill;
}

export async function createBill(bill: any) {
  const { data, error } = await supabase
    .from("bills")
    .insert([bill])
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function insertBillItems(items: any[]) {
  const { error } = await supabase.from("bill_items").insert(items);

  if (error) throw error;
}
