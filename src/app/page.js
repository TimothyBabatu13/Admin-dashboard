import Companies from "@/components/Companies";
import LogOut from "@/components/LogOut";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-[90%] mx-auto">
      <div className="flex items-center justify-between py-2">
        <h1 className="text-lg">Dashboard</h1>
        <LogOut />
      </div>
      <h2 className="mb-3 text-4xl">Welcome, back 👋</h2>
      <Companies />
    </div>
  );
}
