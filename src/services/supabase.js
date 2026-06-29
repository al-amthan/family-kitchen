import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ziamxlygiqmsofexcvci.supabase.co";
const supabaseKey = "sb_publishable_RZ2PaXTWIV84AeX9UOmuTg_BxmDBrW0";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);