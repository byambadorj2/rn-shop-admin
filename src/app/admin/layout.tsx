import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const supabase = createClient();

  const { data: autData } = await (await supabase).auth.getUser();
  if (autData?.user) {
    const { data, error } = await (await supabase)
      .from("users")
      .select("*")
      .single();
    if (error || !data) {
      console.log("Error fetching user data", error);
      return;
    }
    if (data.type === "admin") return redirect("/admin");
  }

  return <>{children}</>;
}
