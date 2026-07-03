import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

throw new Error(
  JSON.stringify({
    url: supabaseUrl,
    hasKey: !!supabaseAnonKey,
  }),
);

// Comment this out temporarily
// export const supabase = createClient(...)

//export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//  auth: {
//    storage: AsyncStorage,
//    autoRefreshToken: true,
//    persistSession: true,
//    detectSessionInUrl: false,
//  },
//});
