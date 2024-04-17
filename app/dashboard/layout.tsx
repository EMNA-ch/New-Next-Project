"use client";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div>
      {pathname != "/dashboard/settings" && (
        <p className="text-red-500">NavBarDashbord</p>
      )}

      {children}
    </div>
  );
}
