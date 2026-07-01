import { supabase } from "./supabase";

export async function fetchCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) throw error;

  return data ?? [];
}

export async function fetchMenuItems() {
  const { data, error } = await supabase
    .from("menu_items")
    .select(
      `
      *,
      categories (
        id,
        name
      )
    `,
    )
    .eq("is_available", true)
    .order("name");

  if (error) throw error;

  return data ?? [];
}
